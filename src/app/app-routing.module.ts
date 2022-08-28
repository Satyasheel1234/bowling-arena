import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BowlingBoardComponent } from './components/bowling-board/bowling-board.component';

const routes: Routes = [
  { path: 'login',  component: LoginComponent  },
  { path: 'board',  component: BowlingBoardComponent  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
