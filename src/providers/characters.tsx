import React, {createContext, Dispatch, SetStateAction, useContext, useState} from 'react';

interface LikedCharactersProviderProps {
  children: JSX.Element;
}

interface LikedCharacter {
  name: string;
  id: string;
}

const LikedCharacters = createContext({} as [LikedCharacter[], Dispatch<SetStateAction<LikedCharacter[]>>]);

export function useLikedCharacters() {
  const context = useContext(LikedCharacters);

  if (context === undefined) {
    throw new Error('useLikedCharacters must be used within a LikedCharactersProvider');
  }
  return context;
}

export function LikedCharactersProvider({children}: LikedCharactersProviderProps) {
  const [likedChacters, setLikedCharacters] = useState<LikedCharacter[]>([]);
  // const value = useMemo(() => [likedCharacters, setLikedCharacters], [likedCharacters]);
  return <LikedCharacters.Provider value={[likedChacters, setLikedCharacters]}>{children}</LikedCharacters.Provider>;
}
