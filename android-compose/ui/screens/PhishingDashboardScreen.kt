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
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.Warning
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
import com.fomi.app.ui.components.FomiStatCard
import com.fomi.app.ui.components.FomiTopBar
import com.fomi.app.ui.theme.Danger
import com.fomi.app.ui.theme.Gray400
import com.fomi.app.ui.theme.GradientEnd
import com.fomi.app.ui.theme.GradientStart
import com.fomi.app.ui.theme.Navy700
import com.fomi.app.ui.theme.Success
import com.fomi.app.ui.theme.Teal500
import com.fomi.app.ui.theme.Warning
import com.fomi.app.ui.theme.White

data class SmsMessage(
    val sender: String,
    val preview: String,
    val time: String,
    val isSafe: Boolean
)

@Composable
fun PhishingDashboardScreen(
    onBackClick: () -> Unit,
    onMessageClick: (SmsMessage) -> Unit,
    modifier: Modifier = Modifier
) {
    val messages = listOf(
        SmsMessage("[국민은행]", "고객님의 계좌가...", "오전 10:23", false),
        SmsMessage("[택배배송]", "배송조회: http://...", "오전 9:15", false),
        SmsMessage("친구", "오늘 저녁 뭐해?", "어제", true),
        SmsMessage("[통신사]", "이번 달 요금 안내", "어제", true)
    )
    
    val dangerCount = messages.count { !it.isSafe }
    val safeCount = messages.count { it.isSafe }
    
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
                title = "스미싱 점검",
                onBackClick = onBackClick
            )
            
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .verticalScroll(rememberScrollState())
                    .padding(horizontal = 20.dp)
            ) {
                Spacer(modifier = Modifier.height(16.dp))
                
                // Stats
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    FomiStatCard(
                        value = "${messages.size}",
                        label = "검사한 문자",
                        modifier = Modifier.weight(1f),
                        valueColor = Teal500
                    )
                    FomiStatCard(
                        value = "$dangerCount",
                        label = "위험 문자",
                        modifier = Modifier.weight(1f),
                        valueColor = if (dangerCount > 0) Warning else Success
                    )
                }
                
                Spacer(modifier = Modifier.height(24.dp))
                
                // Message List
                Text(
                    text = "최근 메시지",
                    color = White,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.SemiBold,
                    modifier = Modifier.padding(bottom = 12.dp)
                )
                
                messages.forEach { message ->
                    SmsMessageItem(
                        message = message,
                        onClick = { onMessageClick(message) }
                    )
                    Spacer(modifier = Modifier.height(8.dp))
                }
                
                Spacer(modifier = Modifier.height(32.dp))
            }
        }
    }
}

@Composable
private fun SmsMessageItem(
    message: SmsMessage,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(12.dp))
            .background(
                if (message.isSafe) Navy700.copy(alpha = 0.5f)
                else Warning.copy(alpha = 0.1f)
            )
            .clickable(onClick = onClick)
            .padding(16.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Box(
            modifier = Modifier
                .size(40.dp)
                .clip(RoundedCornerShape(20.dp))
                .background(
                    if (message.isSafe) Success.copy(alpha = 0.1f)
                    else Warning.copy(alpha = 0.2f)
                ),
            contentAlignment = Alignment.Center
        ) {
            Icon(
                imageVector = if (message.isSafe) Icons.Default.CheckCircle else Icons.Default.Warning,
                contentDescription = null,
                tint = if (message.isSafe) Success else Warning,
                modifier = Modifier.size(20.dp)
            )
        }
        
        Spacer(modifier = Modifier.width(12.dp))
        
        Column(modifier = Modifier.weight(1f)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = message.sender,
                    color = White,
                    fontSize = 14.sp,
                    fontWeight = FontWeight.Medium
                )
                Text(
                    text = message.time,
                    color = Gray400,
                    fontSize = 12.sp
                )
            }
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = message.preview,
                color = Gray400,
                fontSize = 13.sp,
                maxLines = 1
            )
        }
    }
}
