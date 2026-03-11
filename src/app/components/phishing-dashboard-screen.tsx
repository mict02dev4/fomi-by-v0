import { ChevronLeft, Shield, Bell, Eye, Smartphone, CheckCircle2, XCircle, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface PhishingDashboardScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

export function PhishingDashboardScreen({ onNavigate, onBack }: PhishingDashboardScreenProps) {
  const [protectionEnabled, setProtectionEnabled] = useState(true);
  const [permissions, setPermissions] = useState({
    notification: true,
    usage: true,
    overlay: false,
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="w-10 h-10 rounded-xl hover:bg-secondary flex items-center justify-center">
            <ChevronLeft className="w-6 h-6 text-navy" />
          </button>
          <h2 className="text-navy">스미싱 자동 점검</h2>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 pb-24">
        {/* Protection Status */}
        <div className={`rounded-3xl p-6 mb-6 ${
          protectionEnabled ? 'bg-safe-bg border border-safe/20' : 'bg-muted'
        }`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                protectionEnabled ? 'bg-safe' : 'bg-muted-foreground'
              }`}>
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className={protectionEnabled ? 'text-safe-foreground' : 'text-foreground'}>
                  {protectionEnabled ? '보호 중' : '보호 꺼짐'}
                </h3>
                <p className={`${protectionEnabled ? 'text-safe-foreground/70' : 'text-muted-foreground'}`}>
                  {protectionEnabled
                    ? '위험한 링크와 알림을 자동으로 차단합니다'
                    : '스미싱 보호가 비활성화되어 있습니다'}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setProtectionEnabled(!protectionEnabled)}
            className={`w-full rounded-2xl p-4 transition-all ${
              protectionEnabled
                ? 'bg-white/50 text-safe-foreground hover:bg-white/70'
                : 'bg-navy text-white hover:bg-navy-light'
            }`}
          >
            {protectionEnabled ? '보호 끄기' : '보호 켜기'}
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-card rounded-2xl p-5 border border-border">
            <p className="text-muted-foreground mb-2">이번 달 차단</p>
            <p className="text-navy">12건</p>
          </div>
          <div className="bg-card rounded-2xl p-5 border border-border">
            <p className="text-muted-foreground mb-2">마지막 차단</p>
            <p className="text-navy">어제</p>
          </div>
        </div>

        {/* Permissions Section */}
        <div className="mb-6">
          <h3 className="text-navy mb-4">필수 권한</h3>
          <div className="bg-card rounded-3xl p-2 border border-border">
            {/* Notification Permission */}
            <div className="p-4 border-b border-border last:border-b-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center">
                  <Bell className="w-6 h-6 text-navy" />
                </div>
                <div className="flex-1">
                  <h4 className="text-navy mb-1">알림 접근</h4>
                  <p className="text-muted-foreground">위험한 알림을 감지합니다</p>
                </div>
                {permissions.notification ? (
                  <CheckCircle2 className="w-6 h-6 text-safe" />
                ) : (
                  <XCircle className="w-6 h-6 text-danger" />
                )}
              </div>
            </div>

            {/* Usage Permission */}
            <div className="p-4 border-b border-border last:border-b-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-navy" />
                </div>
                <div className="flex-1">
                  <h4 className="text-navy mb-1">사용기록 접근</h4>
                  <p className="text-muted-foreground">의심스러운 앱을 감지합니다</p>
                </div>
                {permissions.usage ? (
                  <CheckCircle2 className="w-6 h-6 text-safe" />
                ) : (
                  <XCircle className="w-6 h-6 text-danger" />
                )}
              </div>
            </div>

            {/* Overlay Permission */}
            <div className="p-4 border-b border-border last:border-b-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-navy" />
                </div>
                <div className="flex-1">
                  <h4 className="text-navy mb-1">다른 앱 위에 표시</h4>
                  <p className="text-muted-foreground">위험 경고를 표시합니다</p>
                </div>
                {permissions.overlay ? (
                  <CheckCircle2 className="w-6 h-6 text-safe" />
                ) : (
                  <button
                    onClick={() => {
                      setPermissions({ ...permissions, overlay: true });
                      alert('권한 설정으로 이동합니다');
                    }}
                    className="bg-navy text-white rounded-xl px-4 py-2 hover:bg-navy-light"
                  >
                    허용
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Detections */}
        <div>
          <h3 className="text-navy mb-4">최근 차단 기록</h3>
          <div className="space-y-3">
            <button
              onClick={() => onNavigate('risk-warning')}
              className="w-full bg-card rounded-2xl p-4 border border-border hover:bg-secondary/50 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-danger/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-danger" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-navy">의심스러운 링크 차단</p>
                  <p className="text-muted-foreground">어제 오후 3:24</p>
                </div>
                <ChevronRight className="w-5 h-5 text-navy/30" />
              </div>
            </button>
            <div className="bg-card rounded-2xl p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-warning" />
                </div>
                <div className="flex-1">
                  <p className="text-navy">피싱 앱 설치 시도 차단</p>
                  <p className="text-muted-foreground">3일 전</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-danger/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-danger" />
                </div>
                <div className="flex-1">
                  <p className="text-navy">악성 링크 차단</p>
                  <p className="text-muted-foreground">5일 전</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
