type User = {
  permissions: string[];
  roles: string[];
}

type ValidateUserPermissionsParams = {
  user: User;
  permissions?: string[];
  roles?: string[];
}

export function validateUserPermissions({
  user,
  permissions, 
  roles
}: ValidateUserPermissionsParams) {
  // Verifica as permissões do user em login  
  if(permissions?.length > 0) {
    const hasAllPermissions = permissions.every(permission => {
      return user.permissions.includes(permission);
    });
    if(!hasAllPermissions) {
      return false;
    }
  }
  // Verifica as funções permitidas ao user
  if(roles?.length > 0) {
    const hasAllRoles = roles.some(role => {
      return user.roles.includes(role);
    });

    if(!hasAllRoles) {
      return false;
    }
  }

  return true;
}