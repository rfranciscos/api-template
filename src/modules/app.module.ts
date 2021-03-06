import { AppController } from '@controllers';
import { Module } from '@nestjs/common';
import { AppService } from '@services';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
