'use client';

import React, { useEffect, useState } from 'react';
import api from '@/lib/api';
import { HealthStatus, ApiResponse } from '@/types/auth';
import { CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

export const HealthIndicator: React.FC = () => {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const checkHealth = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await api.get<ApiResponse<HealthStatus>>('/health');
      if (res.data && res.data.data) {
        setHealth(res.data.data);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkHealth();
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border bg-white/90 shadow-sm backdrop-blur-sm">
      {loading ? (
        <RefreshCw className="w-3.5 h-3.5 text-blue-600 animate-spin" />
      ) : error ? (
        <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
      ) : (
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
      )}
      <span className="text-slate-600">
        API Status:
        <strong className={`ml-1 font-semibold ${error ? 'text-amber-600' : 'text-emerald-600'}`}>
          {loading ? 'Connecting...' : error ? 'Standby (Port 8080)' : `${health?.status} (Live)`}
        </strong>
      </span>
    </div>
  );
};
