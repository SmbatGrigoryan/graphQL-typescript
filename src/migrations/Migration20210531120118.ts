import { Migration } from '@mikro-orm/migrations';

export class Migration20210531120118 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "post" ("id" serial primary key, "title" varchar(255) not null, "text" text not null);');
  }

}
