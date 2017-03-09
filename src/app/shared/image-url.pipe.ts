import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {
  // Here you can find the available images sizes
  // https://api.themoviedb.org/3/configuration?api_key=ec92634a4466078d022a85a41caee33e
  transform(image: string, args?: any): any {
    return 'http://image.tmdb.org/t/p/w185/' + image;
  }
}
