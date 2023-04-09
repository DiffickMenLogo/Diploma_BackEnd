import { JwtMiddleware } from './jwt.middleware';
import { JwtModule } from '@nestjs/jwt';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [JwtMiddleware],
  exports: [JwtMiddleware],
})
export class JwtMiddlewareModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply((req, res, next) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // указываем домен, с которого разрешены запросы
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      ); // указываем список разрешенных заголовков
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS',
      ); // указываем список разрешенных методов запросов
      next();
    });
    consumer
      .apply(JwtMiddleware)
      .exclude('auth/signup', 'auth/signin', 'words', 'files/:filename')
      .forRoutes('*');
  }
}
