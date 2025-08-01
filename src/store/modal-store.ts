// 控制登录和注册弹窗是否展示
import { create } from 'zustand';

interface ModalStore {
  isLoginModalOpen: boolean;
  isRegisterModalOpen: boolean;
  setIsLoginModalOpen: (isLoginModalOpen: boolean) => void;
  setIsRegisterModalOpen: (isRegisterModalOpen: boolean) => void;
  isAddTripModalOpen: boolean;
  setIsAddTripModalOpen: (isAddTripModalOpen: boolean) => void;
}

const useModalStore = create<ModalStore>((set) => ({
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
  isAddTripModalOpen: false,
  setIsLoginModalOpen: (isLoginModalOpen) => set({ isLoginModalOpen }),
  setIsRegisterModalOpen: (isRegisterModalOpen) => set({ isRegisterModalOpen }),
  setIsAddTripModalOpen: (isAddTripModalOpen) => set({ isAddTripModalOpen }),
}));

export default useModalStore;
