import { AxiosPromise, AxiosResponse } from "axios";

interface HasId {
  id?: number;
}

interface ModalAttributes<T> {
  set(update: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[k];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModalAttributes<T>,
    private events: Events,
    private Sync: Sync<T>
  ) {}

  on = this.events.on;

  trigger = this.events.trigger;

  get = this.attributes.get;

  
  set(update: T): void {
    this.set(update);
    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.get("id");
    if (typeof id !== "number") {
      throw new Error("Can't fetch without Id");
    }

    this.Sync.fetch(id).then((response: AxiosResponse): void => {
      console.log(response);
      this.set(response.data);
    });
  }

  save(): void {
    this.Sync.save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        console.log(response);
        this.trigger("save");
      })
      .catch((error) => {
        this.trigger("error");
      });
  }
}
