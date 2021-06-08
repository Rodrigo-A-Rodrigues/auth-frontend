import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

type UseCanParams = {
  permissions?: string[];
  roles?: string[]; 
}

export function useCan({permissions, roles}: UseCanParams) {
  const {user,isAuthenticated} = useContext(AuthContext);

  if(!isAuthenticated) {
    return false
  };
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