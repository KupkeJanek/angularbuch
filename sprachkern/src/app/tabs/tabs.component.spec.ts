import { TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import {Component} from '@angular/core';
import {TabsModule} from './tabs.module';

@Component({
  template: `
    <ch-tabs>
      <ch-tab title='Tab1'> Content1 </ch-tab>
      <ch-tab title='Tab2'> Content2</ch-tab>
    </ch-tabs>`,
})
export class TestComponent {
}

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [TabsModule],
    declarations: [TestComponent],
  });
});

describe('Tabs Component', () => {
  it('should switch the content when clicking the header', () => {
    const fixture = TestBed.createComponent(TestComponent);
    const element = fixture.nativeElement;
    fixture.autoDetectChanges(true);

    expect(element.querySelector('.tab-content').textContent)
      .toContain('Content1');
    expect(element.querySelector('.tab-content').textContent)
      .not.toContain('Content2');

    element.querySelectorAll('li')[1].click();

    expect(element.querySelector('.tab-content').textContent)
      .not.toContain('Content1');
    expect(element.querySelector('.tab-content').textContent)
      .toContain('Content2');
  });


  it('should allow HTML in the Tab-Body', ((done) => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <ch-tabs>
            <ch-tab title="Tab1">
               <span id="content">Content1</span>
            </ch-tab>
          </ch-tabs>`
      }});

    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(TestComponent);
      fixture.autoDetectChanges(true);
      expect(fixture.nativeElement.querySelector('#content').textContent)
        .toContain('Content1');
      done();
    });
  }));

  it('should allow HTML (with async)', waitForAsync(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <ch-tabs>
            <ch-tab title="Tab1">
               <span id="content">Content1</span>
            </ch-tab>
          </ch-tabs>`
      }});

    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(TestComponent);
      fixture.autoDetectChanges(true);
      expect(fixture.nativeElement.querySelector('#content').textContent)
        .toContain('Content1');
    });
  }));

  it('should be possible to simulate time', fakeAsync(() => {
    let called = false;
    setTimeout(() => {
      called = true;
    }, 100);
    expect(called).toBe(false);
    tick(100);
    expect(called).toBe(true);
  }));

});
