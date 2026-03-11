package com.fomi.app.ui.screens

import androidx.compose.foundation.background
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
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Description
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.Shield
import androidx.compose.material.icons.filled.Warning
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.fomi.app.ui.components.FomiFeatureCard
import com.fomi.app.ui.theme.Gray400
import com.fomi.app.ui.theme.GradientEnd
import com.fomi.app.ui.theme.GradientStart
import com.fomi.app.ui.theme.Navy700
import com.fomi.app.ui.theme.Teal500
import com.fomi.app.ui.theme.Warning
import com.fomi.app.ui.theme.White

@Composable
fun HomeScreen(
    onMalwareCheckClick: () -> Unit,
    onPhishingCheckClick: () -> Unit,
    onDocumentHubClick: () -> Unit,
    onInfoClick: () -> Unit,
    modifier: Modifier = Modifier
) {
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
            modifier = Modifier
                .fillMaxSize()
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 20.dp)
        ) {
            // Top Bar
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 16.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "FOMI",
                    color = Teal500,
                    fontSize = 24.sp,
                    fontWeight = FontWeight.Bold
                )
                IconButton(onClick = onInfoClick) {
                    Icon(
                        imageVector = Icons.Default.Info,
                        contentDescription = "정보",
                        tint = Gray400
                    )
                }
            }
            
            Spacer(modifier = Modifier.height(40.dp))
            
            // Shield Icon
            Box(
                modifier = Modifier
                    .size(120.dp)
                    .align(Alignment.CenterHorizontally)
                    .clip(RoundedCornerShape(60.dp))
                    .background(Teal500.copy(alpha = 0.1f)),
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    imageVector = Icons.Default.Shield,
                    contentDescription = null,
                    tint = Teal500,
                    modifier = Modifier.size(64.dp)
                )
            }
            
            Spacer(modifier = Modifier.height(24.dp))
            
            // Title
            Text(
                text = "안전한 디지털 생활",
                color = White,
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold,
                textAlign = TextAlign.Center,
                modifier = Modifier.fillMaxWidth()
            )
            
            Text(
                text = "FOMI가 당신의 스마트폰을 보호합니다",
                color = Gray400,
                fontSize = 14.sp,
                textAlign = TextAlign.Center,
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(top = 8.dp)
            )
            
            Spacer(modifier = Modifier.height(48.dp))
            
            // Feature Cards
            Text(
                text = "보안 기능",
                color = White,
                fontSize = 18.sp,
                fontWeight = FontWeight.SemiBold,
                modifier = Modifier.padding(bottom = 16.dp)
            )
            
            FomiFeatureCard(
                icon = Icons.Default.Shield,
                title = "악성앱 검사",
                description = "설치된 앱의 안전성을 검사합니다",
                onClick = onMalwareCheckClick,
                iconBackgroundColor = Teal500.copy(alpha = 0.1f),
                iconTint = Teal500
            )
            
            Spacer(modifier = Modifier.height(12.dp))
            
            FomiFeatureCard(
                icon = Icons.Default.Warning,
                title = "스미싱 점검",
                description = "문자 메시지의 피싱 위험을 분석합니다",
                onClick = onPhishingCheckClick,
                iconBackgroundColor = Warning.copy(alpha = 0.1f),
                iconTint = Warning
            )
            
            Spacer(modifier = Modifier.height(12.dp))
            
            FomiFeatureCard(
                icon = Icons.Default.Description,
                title = "문서 허브",
                description = "보안 관련 문서를 확인합니다",
                onClick = onDocumentHubClick,
                iconBackgroundColor = Navy700,
                iconTint = Gray400
            )
            
            Spacer(modifier = Modifier.height(32.dp))
        }
    }
}
