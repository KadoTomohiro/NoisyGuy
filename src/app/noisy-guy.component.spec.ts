import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NoisyGuyAppComponent } from '../app/noisy-guy.component';

beforeEachProviders(() => [NoisyGuyAppComponent]);

describe('App: NoisyGuy', () => {
  it('should create the app',
      inject([NoisyGuyAppComponent], (app: NoisyGuyAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'noisy-guy works!\'',
      inject([NoisyGuyAppComponent], (app: NoisyGuyAppComponent) => {
    expect(app.title).toEqual('noisy-guy works!');
  }));
});
