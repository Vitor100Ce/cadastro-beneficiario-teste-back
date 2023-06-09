import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors: true});
  const config = new DocumentBuilder()
    .setTitle('Cadastro de beneficiários')
    .setDescription('Sistemas para cadastro de beneficários e dependentes de um plano de saúde')
    .setVersion('1.0')
    .addTag('Cadastro de beneficiários')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors()
  await app.listen(3000);
}
bootstrap();
