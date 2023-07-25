'use client';

import useSession from '@/hooks/useSession';
import { Menu } from '@/styles/Icons';
import Link from 'next/link';
import { useState } from 'react';
import LogoutButton from '../LogoutButton';
import PrimaryButton from '../PrimaryButton';

const HamburgerProfileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const session = useSession();

  const handleClickMenu = () => {
    setIsOpen((prev) => !prev);
  };

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="flex">
      <Menu className="w-5 h-5 text-primary hover:cursor-pointer" onClick={handleClickMenu} />
      {isOpen && (
        <div className="absolute right-0 w-64 bg-white rounded-b-lg dark:bg-primary-dark top-20">
          <div className="flex flex-col p-2 mb-1 gap-y-2">
            {session.user ? (
              <>
                <Link href={`/profile`}>
                  <PrimaryButton onClick={closeMenu} className="w-full">
                    Aceder ao perfil
                  </PrimaryButton>
                </Link>
                <LogoutButton onClick={closeMenu} />
              </>
            ) : (
              <>
                <Link href="/login">
                  <PrimaryButton onClick={closeMenu} className="w-full">
                    Entrar numa conta
                  </PrimaryButton>
                </Link>
                <Link href="/register">
                  <PrimaryButton onClick={closeMenu} className="w-full">
                    Criar uma conta
                  </PrimaryButton>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerProfileMenu;
