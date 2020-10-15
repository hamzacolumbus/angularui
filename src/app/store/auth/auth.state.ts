import { Timestamp } from 'rxjs';
import { User, Create_dto } from '@app/@shared/dto/User';

export interface AuthenticationState {
  user?: User;
  isLoading?: boolean;
  errorCode?: string;
  errorMessage?: string;
  authed?: boolean;
  register?: Create_dto;
}
