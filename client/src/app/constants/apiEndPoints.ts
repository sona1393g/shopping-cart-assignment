import { environment } from 'src/environments/environment';

export class ApiEndPoints {
  public static GET_HOME_BANNERS = environment.apiUrl + '/banners';
  public static GET_CATEGORIES = environment.apiUrl + '/categories';
  public static GET_PRODUCTS = environment.apiUrl + '/products';
  public static POST_ADD_TO_CARTS = environment.apiUrl + '/addToCart';
}
