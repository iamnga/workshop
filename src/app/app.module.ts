import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgendaComponent } from './agenda/agenda.component';
import { DigitalAppComponent } from './digital-app/digital-app.component';
import { SurveyComponent } from './survey/survey.component';
import { StmComponent } from './digital-app/stm/stm.component';
import { OmnichannelComponent } from './digital-app/omnichannel/omnichannel.component';
import { CustomerInsightComponent } from './digital-app/customer-insight/customer-insight.component';
import { DocumentComponent } from './document/document.component';
import { FirstComponent } from './survey/first/first.component';
import { SecondComponent } from './survey/second/second.component';
import { ThirdComponent } from './survey/third/third.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    DigitalAppComponent,
    SurveyComponent,
    StmComponent,
    OmnichannelComponent,
    CustomerInsightComponent,
    DocumentComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
