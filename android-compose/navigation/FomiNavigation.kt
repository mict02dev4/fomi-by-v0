package com.fomi.app.navigation

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.fomi.app.ui.screens.DocumentHubScreen
import com.fomi.app.ui.screens.HomeScreen
import com.fomi.app.ui.screens.InfoScreen
import com.fomi.app.ui.screens.MalwareDangerScreen
import com.fomi.app.ui.screens.MalwareEntryScreen
import com.fomi.app.ui.screens.MalwareSafeScreen
import com.fomi.app.ui.screens.MalwareScanningScreen
import com.fomi.app.ui.screens.PhishingDashboardScreen
import com.fomi.app.ui.screens.RiskWarningScreen

sealed class Screen(val route: String) {
    object Home : Screen("home")
    object MalwareEntry : Screen("malware_entry")
    object MalwareScanning : Screen("malware_scanning")
    object MalwareSafe : Screen("malware_safe")
    object MalwareDanger : Screen("malware_danger")
    object PhishingDashboard : Screen("phishing_dashboard")
    object RiskWarning : Screen("risk_warning")
    object DocumentHub : Screen("document_hub")
    object Info : Screen("info")
}

@Composable
fun FomiNavHost(
    navController: NavHostController = rememberNavController(),
    startDestination: String = Screen.Home.route
) {
    NavHost(
        navController = navController,
        startDestination = startDestination
    ) {
        composable(Screen.Home.route) {
            HomeScreen(
                onMalwareCheckClick = { navController.navigate(Screen.MalwareEntry.route) },
                onPhishingCheckClick = { navController.navigate(Screen.PhishingDashboard.route) },
                onDocumentHubClick = { navController.navigate(Screen.DocumentHub.route) },
                onInfoClick = { navController.navigate(Screen.Info.route) }
            )
        }
        
        composable(Screen.MalwareEntry.route) {
            MalwareEntryScreen(
                onBackClick = { navController.popBackStack() },
                onStartScan = { navController.navigate(Screen.MalwareScanning.route) }
            )
        }
        
        composable(Screen.MalwareScanning.route) {
            MalwareScanningScreen(
                onScanComplete = { isSafe ->
                    navController.popBackStack()
                    if (isSafe) {
                        navController.navigate(Screen.MalwareSafe.route)
                    } else {
                        navController.navigate(Screen.MalwareDanger.route)
                    }
                }
            )
        }
        
        composable(Screen.MalwareSafe.route) {
            MalwareSafeScreen(
                onBackClick = { navController.popBackStack() },
                onDone = { 
                    navController.popBackStack(Screen.Home.route, inclusive = false)
                }
            )
        }
        
        composable(Screen.MalwareDanger.route) {
            MalwareDangerScreen(
                onBackClick = { navController.popBackStack() },
                onDeleteAll = {
                    navController.popBackStack(Screen.Home.route, inclusive = false)
                },
                onSkip = {
                    navController.popBackStack(Screen.Home.route, inclusive = false)
                }
            )
        }
        
        composable(Screen.PhishingDashboard.route) {
            PhishingDashboardScreen(
                onBackClick = { navController.popBackStack() },
                onMessageClick = { message ->
                    if (!message.isSafe) {
                        navController.navigate(Screen.RiskWarning.route)
                    }
                }
            )
        }
        
        composable(Screen.RiskWarning.route) {
            RiskWarningScreen(
                url = "http://suspicious-link.com/fake",
                onBackClick = { navController.popBackStack() },
                onBlock = { navController.popBackStack() },
                onProceed = { navController.popBackStack() }
            )
        }
        
        composable(Screen.DocumentHub.route) {
            DocumentHubScreen(
                onBackClick = { navController.popBackStack() },
                onDocumentClick = { /* Open document detail */ }
            )
        }
        
        composable(Screen.Info.route) {
            InfoScreen(
                onBackClick = { navController.popBackStack() }
            )
        }
    }
}
