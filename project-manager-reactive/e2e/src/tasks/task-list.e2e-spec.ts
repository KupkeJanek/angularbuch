
import {takeScreenshot} from '../helpers/take_screenshot';
import {TaskListPage} from './task-list.po';
import { browser } from 'protractor';


describe('TaskList', function () {

  let page: TaskListPage;
  beforeEach(() => {
    page = new TaskListPage();
    page.navigateTo();
  });

  xit('should allow to create new tasks (forgot to press save)', () => {

    const editPage = page.gotoNewTaskView();
    editPage.fillForm('New Task', 'BACKLOG');
   // editPage.save();

    expect(page.checkTaskDisplayed('New Task')).not.toBeNull();

  });

  it('should allow searching for tasks', () => {
    page.searchForTasks('Ersten');
    expect(page.getTaskCount()).toEqual(1);
  });

  it('should work with no search results', () => {
    page.searchForTasks('Ich existiere nicht.');
    expect(page.getTaskCount()).toEqual(0);
  });


  it('should allow to create new tasks', () => {
    const taskTitle = `New Task ${new Date().getTime()}`;
    const editPage = page.gotoNewTaskView();
    editPage.fillForm(taskTitle, 'IN_PROGRESS');
    editPage.save();
    takeScreenshot('createTaskFailure.png');
    page.checkTaskDisplayed(taskTitle);
  });

  it('should add new tasks to the displayed list', () => {
    page.getTaskCount().then(count => {
      const editPage = page.gotoNewTaskView();
      editPage.fillForm('New Task', 'IN_PROGRESS');
      editPage.save();
      expect(page.getTaskCount()).toEqual(count + 1);
    });
  });

});
