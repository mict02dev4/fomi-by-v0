package com.fomi.app.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Article
import androidx.compose.material.icons.filled.ChevronRight
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.fomi.app.ui.components.FomiTopBar
import com.fomi.app.ui.theme.Gray400
import com.fomi.app.ui.theme.GradientEnd
import com.fomi.app.ui.theme.GradientStart
import com.fomi.app.ui.theme.Navy700
import com.fomi.app.ui.theme.Teal500
import com.fomi.app.ui.theme.White

data class Document(
    val id: String,
    val title: String,
    val description: String,
    val category: String
)

@Composable
fun DocumentHubScreen(
    onBackClick: () -> Unit,
    onDocumentClick: (Document) -> Unit,
    modifier: Modifier = Modifier
) {
    val documents = listOf(
        Document("1", "피싱 예방 가이드", "피싱 공격으로부터 자신을 보호하는 방법", "보안"),
        Document("2", "안전한 앱 설치 방법", "신뢰할 수 있는 앱만 설치하는 방법", "앱 보안"),
        Document("3", "개인정보 보호 팁", "온라인에서 개인정보를 안전하게 지키는 방법", "프라이버시"),
        Document("4", "스미싱 대응 방법", "문자 메시지를 통한 사기 피하기", "보안"),
        Document("5", "공공 Wi-Fi 사용 시 주의사항", "안전하지 않은 네트워크에서의 보안", "네트워크")
    )
    
    Box(
        modifier = modifier
            .fillMaxSize()
            .background(
                brush = Brush.verticalGradient(
                    colors = listOf(GradientStart, GradientEnd)
                )
            )
    ) {
        Column(
            modifier = Modifier.fillMaxSize()
        ) {
            FomiTopBar(
                title = "문서 허브",
                onBackClick = onBackClick
            )
            
            LazyColumn(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(horizontal = 20.dp),
                verticalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                item { Spacer(modifier = Modifier.height(8.dp)) }
                
                item {
                    Text(
                        text = "보안 문서",
                        color = White,
                        fontSize = 18.sp,
                        fontWeight = FontWeight.SemiBold
                    )
                }
                
                item { Spacer(modifier = Modifier.height(4.dp)) }
                
                items(documents) { document ->
                    DocumentItem(
                        document = document,
                        onClick = { onDocumentClick(document) }
                    )
                }
                
                item { Spacer(modifier = Modifier.height(32.dp)) }
            }
        }
    }
}

@Composable
private fun DocumentItem(
    document: Document,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(12.dp))
            .background(Navy700.copy(alpha = 0.5f))
            .clickable(onClick = onClick)
            .padding(16.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Box(
            modifier = Modifier
                .size(48.dp)
                .clip(RoundedCornerShape(12.dp))
                .background(Teal500.copy(alpha = 0.1f)),
            contentAlignment = Alignment.Center
        ) {
            Icon(
                imageVector = Icons.Default.Article,
                contentDescription = null,
                tint = Teal500,
                modifier = Modifier.size(24.dp)
            )
        }
        
        Spacer(modifier = Modifier.width(16.dp))
        
        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = document.title,
                color = White,
                fontSize = 15.sp,
                fontWeight = FontWeight.Medium
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = document.description,
                color = Gray400,
                fontSize = 13.sp,
                maxLines = 2
            )
            Spacer(modifier = Modifier.height(4.dp))
            Box(
                modifier = Modifier
                    .clip(RoundedCornerShape(4.dp))
                    .background(Navy700)
                    .padding(horizontal = 8.dp, vertical = 2.dp)
            ) {
                Text(
                    text = document.category,
                    color = Teal500,
                    fontSize = 10.sp,
                    fontWeight = FontWeight.Medium
                )
            }
        }
        
        Icon(
            imageVector = Icons.Default.ChevronRight,
            contentDescription = null,
            tint = Gray400,
            modifier = Modifier.size(20.dp)
        )
    }
}
