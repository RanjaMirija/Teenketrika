import { JobsService } from './../../services/jobs.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Job } from 'src/app/interfaces/job';
import algoliasearch from 'algoliasearch';

const searchClient = algoliasearch(
  '4SSZHFWZTF',
  '78d156d84098501557c803cde2445e12'
)

@Component({
  selector: 'app-job-result',
  templateUrl: './job-result.component.html',
  styleUrls: ['./job-result.component.scss']
})
export class JobResultComponent implements OnInit, OnDestroy {

  config = {
    indexName: 'indexJobs',
    searchClient
  }

  jobs: Job[] = [];
  subscription!: Subscription;

  constructor(
    private JobsService : JobsService
  ) { }

  ngOnInit(): void {
   /*this.JobsService.jobs.subscribe(data => {
    this.jobs = data;
   })*/

   /*this.subscription = this.JobsService.jobs.subscribe({
    next: ((data)=>{
      this.jobs = data
    }),
    error: console.error
   })*/

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
