export class MockSocket {
  emit(action: any, data: any) {
  }
  addEventListener(l: any) {

  }
  removeEventListener(l: any) {

  }
}

export function mockIO(): any {
    return new MockSocket();
}
