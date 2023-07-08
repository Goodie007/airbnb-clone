import React from "react";

interface IconProps {
  type: string;
  color?: string;
  width?: string | number;
  height?: any;
}

type SingleIcon = Omit<IconProps, "type">;

const Search = ({ color, width, height }: SingleIcon) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 21 21"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z"
        fill={"#FFFFFF"}
      />
    </svg>
  );
};

const SearchMobile = ({ color, width, height }: SingleIcon) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 21 21"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z"
        fill={"#000"}
      />
    </svg>
  );
};

const ArrowDown = ({ color, width, height }: SingleIcon) => {
  return (
    <svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.49972 3.79981L7.79959 0.5L8.74239 1.44281L4.49972 5.68548L0.25708 1.44281L1.19989 0.5L4.49972 3.79981Z"
        fill="white"
      />
    </svg>
  );
};

const Globe = ({ color, width, height }: SingleIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="18"
      viewBox="0 -960 960 960"
      width="18"
    >
      <path d="M480-80q-84 0-157-31.5T196-197q-54-54-85-127.5T80-482q0-84 31-156.5T196-765q54-54 127-84.5T480-880q84 0 157 30.5T764-765q54 54 85 126.5T880-482q0 84-31 157.5T764-197q-54 54-127 85.5T480-80Zm0-58q35-36 58.5-82.5T577-331H384q14 60 37.5 108t58.5 85Zm-85-12q-25-38-43-82t-30-99H172q38 71 88 111.5T395-150Zm171-1q72-23 129.5-69T788-331H639q-13 54-30.5 98T566-151ZM152-391h159q-3-27-3.5-48.5T307-482q0-25 1-44.5t4-43.5H152q-7 24-9.5 43t-2.5 45q0 26 2.5 46.5T152-391Zm221 0h215q4-31 5-50.5t1-40.5q0-20-1-38.5t-5-49.5H373q-4 31-5 49.5t-1 38.5q0 21 1 40.5t5 50.5Zm275 0h160q7-24 9.5-44.5T820-482q0-26-2.5-45t-9.5-43H649q3 35 4 53.5t1 34.5q0 22-1.5 41.5T648-391Zm-10-239h150q-33-69-90.5-115T565-810q25 37 42.5 80T638-630Zm-254 0h194q-11-53-37-102.5T480-820q-32 27-54 71t-42 119Zm-212 0h151q11-54 28-96.5t43-82.5q-75 19-131 64t-91 115Z" />
    </svg>
  );
};

const Menu = ({ color, width, height }: SingleIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 -960 960 960"
      width="20"
    >
      <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
    </svg>
  );
};

const Profile = ({ color, width, height }: SingleIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="29"
      viewBox="0 -960 960 960"
      width="29"
      fill={"grey"}
    >
      <path d="M222-255q63-44 125-67.5T480-346q71 0 133.5 23.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm.654 370Q398-80 325-111.5q-73-31.5-127.5-86t-86-127.266Q80-397.532 80-480.266T111.5-635.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5-848.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5-325q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480-140q55 0 107.5-16T691-212q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480-140Zm0-370q34 0 55.5-21.5T557-587q0-34-21.5-55.5T480-664q-34 0-55.5 21.5T403-587q0 34 21.5 55.5T480-510Zm0-77Zm0 374Z" />
    </svg>
  );
};

const Ratings = ({ color, width, height }: SingleIcon) => {
  return (
    <svg
      width="68"
      height="12"
      viewBox="0 0 68 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0L7.76336 3.57295L11.7063 4.1459L8.85317 6.92705L9.52671 10.8541L6 9L2.47329 10.8541L3.14683 6.92705L0.293661 4.1459L4.23664 3.57295L6 0Z"
        fill="#FFB16C"
      />
      <path
        d="M20 0L21.7634 3.57295L25.7063 4.1459L22.8532 6.92705L23.5267 10.8541L20 9L16.4733 10.8541L17.1468 6.92705L14.2937 4.1459L18.2366 3.57295L20 0Z"
        fill="#FFB16C"
      />
      <path
        d="M34 0L35.7634 3.57295L39.7063 4.1459L36.8532 6.92705L37.5267 10.8541L34 9L30.4733 10.8541L31.1468 6.92705L28.2937 4.1459L32.2366 3.57295L34 0Z"
        fill="#FFB16C"
      />
      <path
        d="M48 0L49.7634 3.57295L53.7063 4.1459L50.8532 6.92705L51.5267 10.8541L48 9L44.4733 10.8541L45.1468 6.92705L42.2937 4.1459L46.2366 3.57295L48 0Z"
        fill="#FFB16C"
      />
      <path
        d="M62 0L63.7634 3.57295L67.7063 4.1459L64.8532 6.92705L65.5267 10.8541L62 9L58.4733 10.8541L59.1468 6.92705L56.2937 4.1459L60.2366 3.57295L62 0Z"
        fill="#FFB16C"
      />
    </svg>
  );
};

const IosBack = ({ color, width, height }: SingleIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 -960 960 960"
      width="20"
      fill={"#000"}
    >
      <path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z" />
    </svg>
  );
};

const IosForward = ({ color, width, height }: SingleIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 -960 960 960"
      width="20"
    >
      <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
    </svg>
  );
};

const Mark = ({ color, width, height }: SingleIcon) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="8"
        cy="8.5"
        r="7.66667"
        stroke="#190C01"
        stroke-width="0.666667"
      />
      <path
        d="M3.75 8L7 11.25L12 5.5"
        stroke="#190C01"
        stroke-width="1.33333"
      />
    </svg>
  );
};

const SingleStar = ({ color, width, height }: SingleIcon) => {
  return (
    <svg
      width="13"
      height="11"
      viewBox="0 0 13 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 0L8.26336 3.57295L12.2063 4.1459L9.35317 6.92705L10.0267 10.8541L6.5 9L2.97329 10.8541L3.64683 6.92705L0.793661 4.1459L4.73664 3.57295L6.5 0Z"
        fill="#FFB16C"
      />
    </svg>
  );
};

const Plug = ({ color, width, height }: SingleIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="18"
      viewBox="0 -960 960 960"
      width="18"
      fill="black"
    >
      <path d="M700-130q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm-.235-60Q733-190 756.5-213.265q23.5-23.264 23.5-56.5Q780-303 756.735-326.5q-23.264-23.5-56.5-23.5Q667-350 643.5-326.735q-23.5 23.264-23.5 56.5Q620-237 643.265-213.5q23.264 23.5 56.5 23.5ZM120-240v-60h360v60H120Zm140-310q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm-.235-60Q293-610 316.5-633.265q23.5-23.264 23.5-56.5Q340-723 316.735-746.5q-23.264-23.5-56.5-23.5Q227-770 203.5-746.735q-23.5 23.264-23.5 56.5Q180-657 203.265-633.5q23.264 23.5 56.5 23.5ZM480-660v-60h360v60H480Z" />
    </svg>
  );
};

const Privacy = ({ color, width, height }: SingleIcon) => {
  return (
    <svg width="26" height="12" fill="none">
      <rect x="0.5" y="0.5" width="25" height="11" rx="5.5" fill="#fff"></rect>
      <path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path>
      <path
        d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
        stroke="#06F"
        stroke-linecap="round"
      ></path>
      <path
        d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
        stroke="#fff"
        stroke-linecap="round"
      ></path>
      <rect
        x="0.5"
        y="0.5"
        width="25"
        height="11"
        rx="5.5"
        stroke="#06F"
      ></rect>
    </svg>
  );
};

const ArrowUp = ({ color, width, height }: SingleIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="28"
      viewBox="0 -960 960 960"
      width="28"
    >
      <path d="m283-345-43-43 240-240 240 239-43 43-197-197-197 198Z" />
    </svg>
  );
};

const BigSearch = ({ color, width, height }: SingleIcon) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 21 21"
      fill={"grey"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z"
        fill={"grey"}
      />
    </svg>
  );
};

const Heart = ({ color, width, height }: SingleIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      fill="grey"
    >
      <path d="m480-121-41-37q-105.768-97.121-174.884-167.561Q195-396 154-451.5T96.5-552Q80-597 80-643q0-90.155 60.5-150.577Q201-854 290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.423Q880-733.155 880-643q0 46-16.5 91T806-451.5Q765-396 695.884-325.561 626.768-255.121 521-158l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712-426 750.5-476t54-89.135q15.5-39.136 15.5-77.72Q820-709 778-751.5T670.225-794q-51.524 0-95.375 31.5Q531-731 504-674h-49q-26-56-69.85-88-43.851-32-95.375-32Q224-794 182-751.5t-42 108.816Q140-604 155.5-564.5t54 90Q248-424 314-358t166 158Zm0-297Z" />
    </svg>
  );
};

const Man = ({ color, width, height }: SingleIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      fill="grey"
      height="24px"
      width="24px"
    >
      <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 8a5 5 0 0 0-2 9.58v2.1l-.15.03a11 11 0 0 0-6.94 4.59C9.26 27.59 12.46 29 16 29s6.74-1.41 9.09-3.7a11 11 0 0 0-6.93-4.59l-.16-.03v-2.1a5 5 0 0 0 3-4.35V14a5 5 0 0 0-5-5zm0-6A13 13 0 0 0 5.56 23.75a13.02 13.02 0 0 1 5.54-4.3l.35-.13-.02-.02A7 7 0 0 1 9 14.27L9 14a7 7 0 1 1 11.78 5.12l-.23.2.04.02c2.33.88 4.36 2.41 5.85 4.4A13 13 0 0 0 16 3z"></path>
    </svg>
  );
};

const Icon = ({ type, color, width, height }: IconProps) => {
  switch (type) {
    case "search":
      return <Search />;
    case "arrowDown":
      return <ArrowDown />;
    case "globe":
      return <Globe />;
    case "menu":
      return <Menu />;
    case "ratings":
      return <Ratings />;
    case "profile":
      return <Profile />;
    case "mark":
      return <Mark />;
    case "singleStar":
      return <SingleStar />;
    case "searchMobile":
      return <SearchMobile />;
    case "plug":
      return <Plug />;
    case "privacy":
      return <Privacy />;
    case "arrowUp":
      return <ArrowUp />;
    case "bigSearch":
      return <BigSearch />;
    case "heart":
      return <Heart />;
    case "man":
      return <Man />;
    case 'forward':
      return <IosForward />
    case 'back':
      return <IosBack />
  }
};

export { Icon };
