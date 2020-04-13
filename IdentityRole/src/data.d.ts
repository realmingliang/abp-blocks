
import { PageRequestDto } from "IdentityRole/src/node_modules/@/services/data";

export interface RoleQueryParams extends PageRequestDto {
  filter?: string;
  sorting?: string;
}

export interface IdentityRoleDto{
  name:string;
  isDefault:boolean;
  isStatic:boolean;
  isPublic:boolean;
  concurrencyStamp:string;
  id:string;
}

export interface IdentityRoleUpdateDto{
  name:string;
  isDefault:boolean;
  isPublic:boolean;
  concurrencyStamp:string;
}
