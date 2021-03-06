import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import {HttpClientModule} from '@angular/common/http';
import { BarchartComponent } from './barchart/barchart.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { ChartsComponent } from './charts/charts.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';
import { TreeChartComponent } from './tree-chart/tree-chart.component';
import { CardChartComponent } from './card-chart/card-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    BarchartComponent,
    ChartsComponent,
    PieChartComponent,
    LineChartComponent,
    BubbleChartComponent,
    GaugeChartComponent,
    TreeChartComponent,
    CardChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
