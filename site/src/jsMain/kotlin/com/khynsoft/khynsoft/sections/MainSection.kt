package com.khynsoft.khynsoft.sections

import androidx.compose.runtime.Composable
import com.khynsoft.khynsoft.util.Constants
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.maxWidth
import org.jetbrains.compose.web.css.px

@Composable
fun MainSection() {
    Box(
        modifier = Modifier.maxWidth(Constants.SECTION_WIDTH.px)
    ) {
        MainBackground()
    }
}

@Composable
fun MainBackground() {

}