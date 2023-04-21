import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit,ViewEncapsulation  } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
import { Job } from '../interfaces/job';
import { JobsService } from '../services/jobs.service';
import { NgbActiveModal,NgbModal } from '@ng-bootstrap/ng-bootstrap';




const searchClient = algoliasearch(
  '4SSZHFWZTF',
  '78d156d84098501557c803cde2445e12'
);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  config = {
    indexName: 'indexJobs',
    searchClient
  };
  job!: Job | undefined;
  subscription: Subscription = new Subscription;

  constructor(
    private jobService : JobsService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onGetJob(jobId : string, content: any){
    this.jobService.getJob(jobId);
    this.subscription = this.jobService.job$.subscribe({
      next : (data) => {
        this.job = data
        console.log(data)
        this.modalService.open(content, {
          size: 'xl',
          centered: true
        });
      },
      error : console.error
    })


  }

  transformItems(items: any[]) {
    return items.sort((a,b) => a.value.localeCompare(b.value))
  }

}
