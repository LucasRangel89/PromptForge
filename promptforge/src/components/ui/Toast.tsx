import { useEffect } from 'react';
import { AlertCircle, CheckCircle2, Info, X } from 'lucide-react';
import { usePromptStore } from '@/store/usePromptStore';

export function Toast() {
  const { notification, dismissNotification } = usePromptStore();

  useEffect(() => {
    if (!notification || notification.action) return;
    const timer = window.setTimeout(dismissNotification, 4200);
    return () => window.clearTimeout(timer);
  }, [notification, dismissNotification]);

  if (!notification) return null;
  const Icon = notification.tone === 'success' ? CheckCircle2 : notification.tone === 'error' ? AlertCircle : Info;

  return (
    <div className={`toast ${notification.tone}`} role={notification.tone === 'error' ? 'alert' : 'status'} key={notification.id}>
      <Icon size={18} />
      <span>{notification.message}</span>
      {notification.action && (
        <button
          type="button"
          className="toast-action"
          onClick={() => {
            const action = notification.action;
            dismissNotification();
            action?.onClick();
          }}
        >
          {notification.action.label}
        </button>
      )}
      <button type="button" className="toast-close" onClick={dismissNotification} aria-label="Fechar notificação"><X size={14} /></button>
    </div>
  );
}
