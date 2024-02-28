import { useQuery } from '@tanstack/react-query'
import { Building, ChevronDown } from 'lucide-react'

import { getManagedRestaurant } from '@/api/get-managed-restaurant'
import { getProfile } from '@/api/get-profile'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  const { data: profile } = useQuery({
    queryKey: ['profile'], // identifica de forma única a requisição na minha aplicação, permitindo que aconteça uma deduplicação
    queryFn: getProfile,
  })

  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          {managedRestaurant?.name}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>{profile?.name}</span>
          <span className="text-sm font-normal text-muted-foreground">
            {profile?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <Building className="mr-2 h-4 w-4" />
          <span>Perfil da loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <Building className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
