import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
  isDisabled?: boolean;
}

export const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
  isDisabled,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-offset-0 duration-200",
        isDisabled ? "opacity-60" : "hover:bg-gray-100"
      )}
      disabled={isDisabled}
    >
      <Icon />
    </button>
  );
};
