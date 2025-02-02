import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useMetrics = () => {
  return useQuery({
    queryKey: ['usageMetrics'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session?.user?.id) {
        throw new Error('No user session found');
      }

      const { data, error } = await supabase
        .from('usage_metrics')
        .select('*')
        .eq('user_id', session.user.id)
        .order('recorded_at', { ascending: false })
        .limit(1)
        .maybeSingle();
      
      if (error) {
        console.error('Error fetching metrics:', error);
        throw error;
      }

      if (!data) {
        const { data: newData, error: insertError } = await supabase
          .from('usage_metrics')
          .insert([
            {
              user_id: session.user.id,
              health_usage: 0,
              energy_usage: 0,
              water_usage: 0
            }
          ])
          .select()
          .maybeSingle();

        if (insertError) {
          console.error('Error creating initial metrics:', insertError);
          throw insertError;
        }

        return newData;
      }

      return data;
    }
  });
};