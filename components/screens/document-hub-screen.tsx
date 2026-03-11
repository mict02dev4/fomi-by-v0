'use client'

import { ChevronLeft, FileText, File, FolderOpen, Clock, Search } from 'lucide-react'

interface DocumentHubScreenProps {
  onBack: () => void
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
]

export function DocumentHubScreen({ onBack }: DocumentHubScreenProps) {
  const handleOpenDocument = (docName: string) => {
    alert(`${docName}을(를) 열람합니다`)
  }

  const handleOpenFile = () => {
    alert('파일 선택 화면으로 이동합니다')
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={onBack} 
            className="w-10 h-10 rounded-xl hover:bg-secondary flex items-center justify-center touch-feedback"
          >
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
            className="w-full bg-secondary rounded-2xl pl-12 pr-4 py-3 text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-navy/20 text-sm"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 pb-24 overflow-y-auto">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={handleOpenFile}
            className="bg-navy text-primary-foreground rounded-3xl p-5 touch-feedback"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-2">
                <FolderOpen className="w-6 h-6" />
              </div>
              <span className="font-medium text-sm">파일 열기</span>
            </div>
          </button>
          <button
            onClick={handleOpenFile}
            className="bg-teal text-primary-foreground rounded-3xl p-5 touch-feedback"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-2">
                <FileText className="w-6 h-6" />
              </div>
              <span className="font-medium text-sm">문서 스캔</span>
            </div>
          </button>
        </div>

        {/* Info Card */}
        <div className="bg-accent rounded-3xl p-5 mb-6 border border-accent-foreground/10">
          <div className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-xl bg-accent-foreground/10 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <h4 className="text-accent-foreground font-semibold mb-1 text-sm">안전한 문서 열람</h4>
              <p className="text-accent-foreground/70 text-xs leading-relaxed">
                PDF, 이미지, 문서 파일을 안전하게<br />
                확인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Documents */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-navy" />
            <h3 className="text-navy font-semibold text-sm">최근 문서</h3>
          </div>
          <div className="space-y-2">
            {recentDocuments.map((doc, index) => (
              <button
                key={index}
                onClick={() => handleOpenDocument(doc.name)}
                className="w-full bg-card rounded-2xl p-4 border border-border touch-feedback text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center flex-shrink-0">
                    {doc.type === 'pdf' ? (
                      <FileText className="w-5 h-5 text-danger" />
                    ) : doc.type === 'image' ? (
                      <File className="w-5 h-5 text-teal" />
                    ) : (
                      <FileText className="w-5 h-5 text-navy" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-navy font-medium text-sm mb-0.5 truncate">{doc.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {doc.date} • {doc.size}
                    </p>
                  </div>
                  <div className="text-navy/30 text-lg">›</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
