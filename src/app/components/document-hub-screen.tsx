import { ChevronLeft, FileText, File, FolderOpen, Clock, Search } from 'lucide-react';

interface DocumentHubScreenProps {
  onBack: () => void;
}

const recentDocuments = [
  {
    name: '주민등록등본.pdf',
    date: '2시간 전',
    size: '245 KB',
    type: 'pdf',
  },
  {
    name: '건강검진 결과.pdf',
    date: '어제',
    size: '1.2 MB',
    type: 'pdf',
  },
  {
    name: '통장 사본.jpg',
    date: '3일 전',
    size: '856 KB',
    type: 'image',
  },
  {
    name: '계약서.docx',
    date: '1주 전',
    size: '124 KB',
    type: 'doc',
  },
];

export function DocumentHubScreen({ onBack }: DocumentHubScreenProps) {
  const handleOpenDocument = (docName: string) => {
    alert(`${docName}을(를) 열람합니다`);
  };

  const handleOpenFile = () => {
    alert('파일 선택 화면으로 이동합니다');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={onBack} className="w-10 h-10 rounded-xl hover:bg-secondary flex items-center justify-center">
            <ChevronLeft className="w-6 h-6 text-navy" />
          </button>
          <h2 className="text-navy">문서 뷰어</h2>
        </div>
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="문서 검색"
            className="w-full bg-secondary rounded-2xl pl-12 pr-4 py-3 text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-navy/20"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 pb-24">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            onClick={handleOpenFile}
            className="bg-navy text-white rounded-3xl p-6 hover:bg-navy-light transition-all active:scale-[0.98]"
          >
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-3">
                <FolderOpen className="w-7 h-7" />
              </div>
              <span>파일 열기</span>
            </div>
          </button>
          <button
            onClick={handleOpenFile}
            className="bg-teal text-white rounded-3xl p-6 hover:bg-teal/90 transition-all active:scale-[0.98]"
          >
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-3">
                <FileText className="w-7 h-7" />
              </div>
              <span>문서 스캔</span>
            </div>
          </button>
        </div>

        {/* Info Card */}
        <div className="bg-accent rounded-3xl p-6 mb-8 border border-accent-foreground/10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent-foreground/10 flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h4 className="text-accent-foreground mb-2">안전한 문서 열람</h4>
              <p className="text-accent-foreground/70">
                PDF, 이미지, 문서 파일을 안전하게<br />
                확인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Documents */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-navy" />
            <h3 className="text-navy">최근 문서</h3>
          </div>
          <div className="space-y-3">
            {recentDocuments.map((doc, index) => (
              <button
                key={index}
                onClick={() => handleOpenDocument(doc.name)}
                className="w-full bg-card rounded-2xl p-5 border border-border hover:shadow-md transition-all active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center flex-shrink-0">
                    {doc.type === 'pdf' ? (
                      <FileText className="w-6 h-6 text-danger" />
                    ) : doc.type === 'image' ? (
                      <File className="w-6 h-6 text-teal" />
                    ) : (
                      <FileText className="w-6 h-6 text-navy" />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-navy mb-1">{doc.name}</p>
                    <p className="text-muted-foreground">
                      {doc.date} • {doc.size}
                    </p>
                  </div>
                  <div className="text-navy/30">›</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
