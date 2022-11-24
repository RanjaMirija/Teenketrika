import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Job } from '../interfaces/job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  jobs!: Observable<Job[]>;
  jobsSubject : BehaviorSubject<Job[]> = new BehaviorSubject(<Job[]>[]);


  constructor(
    private afs : AngularFirestore,
  ) {
    //this.getJobs();
  }

  getJobs() : void {
    const collections = this.afs.collection<Job>('Jobs');
    this.jobs = collections.valueChanges();
  }





 /* getJobs() : void {
   this.db.list('jobs').query.limitToLast(10).once('value', snapshot => {
      const jobsSnapshotValue = snapshot.val();
      const jobs = Object.keys(jobsSnapshotValue).map(id => ({id,...jobsSnapshotValue}));
      this.jobs = jobs;
      console.log(jobs);
      this.dispatchJobs();
    })*/



}
