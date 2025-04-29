import { HttpInterceptorFn } from '@angular/common/http';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('*********** LOGGING STARTS *************');
  console.log(req);
  console.log('URL ', req.url);
  console.log('*********** LOGGING END ****************');
  return next(req);
};
