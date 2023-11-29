import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ResultComponent } from './survey/result/result.component';

const routes: Routes = [
  { path: 'agenda', component: AgendaComponent },
  { path: 'digital-app', component: DigitalAppComponent },
  { path: 'digital-app/stm', component: StmComponent },
  { path: 'digital-app/omnichannel', component: OmnichannelComponent },
  { path: 'digital-app/customer-insight', component: CustomerInsightComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'survey/first', component: FirstComponent },
  { path: 'survey/second', component: SecondComponent },
  { path: 'survey/third', component: ThirdComponent },
  { path: 'survey/result', component: ResultComponent },
  { path: 'document', component: DocumentComponent },
  { path: '', redirectTo: '/agenda', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
