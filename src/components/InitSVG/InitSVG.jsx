import { createPortal } from 'react-dom';

export function InitSVG() {
  return createPortal(
    <svg xmlns="http://www.w3.org/2000/svg">
      <symbol id="fire" viewBox="0 0 16 16">
        <path
          fill="#F15C00"
          d="M10.875 2.258s.454 2.257-.454 4.063c0 0-1.363-5.418-5.904-6.321 0 0 .454.452.454 1.806 0 1.355-2.27 3.612-4.087 6.321-1.817 2.71-.408 4.373.454 5.164.908.903 3.179 2.258 4.087 2.709 0 0-3.633-2.003 1.817-6.97 0 0-.454 2.003 1.362 3.81 0 0 .908-.904 1.362-1.807 0 0 1.817 1.806 0 4.967 0 0 4.996-1.806 5.904-5.418.908-3.612-3.179-6.97-4.995-8.324z"
        />
      </symbol>
      <symbol id="done" viewBox="0 0 16 16">
        <path
          fill="#fa4d4d"
          d="M6.308 11.763a.748.748 0 0 1-.53-.22l-2.641-2.64a.75.75 0 0 1 1.06-1.061l2.11 2.11 5.496-5.495a.749.749 0 1 1 1.06 1.06l-6.025 6.026a.748.748 0 0 1-.53.22z"
        />
      </symbol>
      <symbol id="none" viewBox="0 0 16 16">
        <path
          fill="#02a16d"
          d="M9.06 8l3.47-3.47a.75.75 0 0 0-1.06-1.06L8 6.94 4.53 3.47a.75.75 0 0 0-1.06 1.06L6.94 8l-3.47 3.47a.75.75 0 1 0 1.06 1.06L8 9.06l3.47 3.47a.75.75 0 0 0 1.06-1.06L9.06 8z"
        />
      </symbol>
      <symbol id="fillstar" viewBox="0 0 16 16">
        <path d="M8 .8l2.6 4.4 5 1.1-3.4 3.8.5 5.1-4.7-2-4.7 2.1.5-5.1L.4 6.3l5-1.1L8 .8z" />
      </symbol>
      <symbol id="follower" viewBox="0 0 16 16">
        <path d="M11.83 0H4.17A4.175 4.175 0 0 0 0 4.172v7.656A4.175 4.175 0 0 0 4.17 16h7.66A4.176 4.176 0 0 0 16 11.828V4.172A4.175 4.175 0 0 0 11.83 0zM4.17 1.778h7.66a2.396 2.396 0 0 1 2.392 2.394v7.375a10.32 10.32 0 0 0-2.628-1.395 3.88 3.88 0 0 0 .296-1.478V7.481a3.89 3.89 0 0 0-7.779 0v1.193c0 .508.101 1.01.296 1.478a10.34 10.34 0 0 0-2.63 1.395V4.172a2.396 2.396 0 0 1 2.394-2.394zm5.94 6.898a2.11 2.11 0 1 1-4.22 0V7.48a2.11 2.11 0 0 1 4.22 0v1.196zm1.72 5.546H4.17a2.378 2.378 0 0 1-1.765-.791.492.492 0 0 1 .178-.281 8.603 8.603 0 0 1 2.96-1.487 3.804 3.804 0 0 0 4.911.003 8.556 8.556 0 0 1 2.963 1.484c.09.07.153.17.178.28a2.38 2.38 0 0 1-1.766.792z" />
      </symbol>
      <symbol id="rightarrow" viewBox="0 0 16 16">
        <path d="M10.7 8l-4.2 4.2-1.1-1.1L8.5 8 5.3 4.8l1.1-1.1L10.7 8z" />
      </symbol>
      <symbol id="gallery" viewBox="0 0 16 16">
        <path d="M5.076 6.674a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        <path d="M11.83 0H4.17A4.175 4.175 0 0 0 0 4.172v7.656c.002.523.103 1.04.299 1.526l-.004.003.006.006A4.17 4.17 0 0 0 4.171 16h7.658A4.176 4.176 0 0 0 16 11.828V4.172A4.175 4.175 0 0 0 11.83 0zM1.777 11.828V4.172A2.396 2.396 0 0 1 4.17 1.778h7.658a2.396 2.396 0 0 1 2.393 2.394v4.854l-1.615-1.28a4.856 4.856 0 0 0-6.282.194l-4.53 4.068c-.004-.059-.017-.118-.017-.18zm10.051 2.394H4.171a2.37 2.37 0 0 1-1.539-.576l4.88-4.385a3.081 3.081 0 0 1 3.989-.122l2.721 2.157v.533a2.396 2.396 0 0 1-2.393 2.393z" />
      </symbol>
      <symbol id="leftarrow" viewBox="0 0 16 16">
        <path d="M5.3 8l4.2-4.2 1.1 1.1L7.5 8l3.2 3.2-1.1 1.1L5.3 8z" />
      </symbol>
      <symbol id="save" viewBox="0 0 16 16">
        <path d="M13.25 16a.714.714 0 0 1-.436-.149L8 12.183l-4.814 3.668a.711.711 0 0 1-.78.06.772.772 0 0 1-.296-.294A.84.84 0 0 1 2 15.2V2.4c0-.636.238-1.246.66-1.696C3.08.254 3.653 0 4.25 0h7.5a2.18 2.18 0 0 1 1.59.704c.422.45.66 1.06.66 1.696v12.8a.828.828 0 0 1-.22.566.727.727 0 0 1-.53.234zM8 10.4c.156 0 .309.052.436.15l4.064 3.095V2.4a.828.828 0 0 0-.22-.566.727.727 0 0 0-.53-.234h-7.5a.727.727 0 0 0-.53.234.828.828 0 0 0-.22.566v11.245l4.064-3.095A.718.718 0 0 1 8 10.4z" />
      </symbol>
      <symbol id="pencil" viewBox="0 0 16 16">
        <path d="M.014 14.955a.89.89 0 0 0 1.031 1.031l4.969-.877a.898.898 0 0 0 .474-.248l8.77-8.768a2.549 2.549 0 0 0 0-3.595L13.504.744A2.548 2.548 0 0 0 9.908.74l-8.77 8.771a.885.885 0 0 0-.246.474l-.877 4.969H.014zm6.68-2.815L3.86 9.306l4.923-4.924 2.835 2.836-4.924 4.922zM14 4.835l-1.125 1.126-2.835-2.835L11.165 2a.767.767 0 0 1 1.081 0L14 3.754a.764.764 0 0 1 0 1.081zm-12.013 9.18l.607-3.443.01-.01 2.835 2.836-.01.01-3.442.607z" />
      </symbol>
      <symbol id="reviews" viewBox="0 0 16 16">
        <path d="M11.83 16H4.17A4.177 4.177 0 0 1 0 11.828V4.172A4.175 4.175 0 0 1 4.17 0h7.66A4.175 4.175 0 0 1 16 4.172v7.656A4.175 4.175 0 0 1 11.83 16zM4.17 1.778a2.396 2.396 0 0 0-2.392 2.394v7.656a2.396 2.396 0 0 0 2.393 2.394h7.658a2.396 2.396 0 0 0 2.393-2.394V4.172a2.396 2.396 0 0 0-2.393-2.394H4.171z" />
        <path d="M11.969 6.99a.647.647 0 0 0-.189-.294.603.603 0 0 0-.308-.146l-2.018-.308-.903-1.915a.657.657 0 0 0-.235-.24.62.62 0 0 0-.634 0 .657.657 0 0 0-.234.24l-.903 1.917-2.018.308a.603.603 0 0 0-.308.145.647.647 0 0 0-.189.293.674.674 0 0 0 .156.66l1.46 1.49-.344 2.105a.673.673 0 0 0 .036.352.641.641 0 0 0 .208.279.599.599 0 0 0 .648.05L8 10.928l1.806.995a.59.59 0 0 0 .65-.047.637.637 0 0 0 .207-.28.67.67 0 0 0 .035-.353l-.345-2.105 1.462-1.49a.673.673 0 0 0 .156-.66h-.001z" />
      </symbol>
      <symbol id="search" viewBox="0 0 16 16">
        <path d="M15.762 14.659l-2.686-2.686a7.353 7.353 0 1 0-1.102 1.104l2.685 2.685a.78.78 0 1 0 1.103-1.103zM3.257 11.453a5.795 5.795 0 1 1 4.097 1.697 5.754 5.754 0 0 1-4.097-1.698v.001z" />
      </symbol>
      <symbol id="photo" viewBox="0 0 16 16">
        <path d="M10.91 1c.152 0 .3.049.424.14a.753.753 0 0 1 .266.37l.56 1.74h1.658c.579 0 1.134.237 1.543.659.41.422.639.994.639 1.591v8.25c0 .597-.23 1.169-.639 1.591a2.15 2.15 0 0 1-1.543.659H2.182a2.149 2.149 0 0 1-1.543-.659A2.286 2.286 0 0 1 0 13.75V5.5c0-.597.23-1.169.639-1.591a2.15 2.15 0 0 1 1.543-.659H3.84l.56-1.74a.749.749 0 0 1 .266-.37A.712.712 0 0 1 5.09 1h5.818zm-.524 1.5H5.615L5.09 4.24a.748.748 0 0 1-.28.381.711.711 0 0 1-.447.129H2.182a.716.716 0 0 0-.514.22.762.762 0 0 0-.213.53v8.25c0 .199.076.39.213.53.136.141.32.22.514.22h11.636a.716.716 0 0 0 .514-.22.762.762 0 0 0 .213-.53V5.5a.762.762 0 0 0-.213-.53.716.716 0 0 0-.514-.22h-2.182a.712.712 0 0 1-.425-.14.748.748 0 0 1-.266-.37l-.56-1.74zM8 5.125a3.94 3.94 0 0 1 2.828 1.208A4.191 4.191 0 0 1 12 9.25a4.199 4.199 0 0 1-1.174 2.915A3.947 3.947 0 0 1 8 13.375a3.94 3.94 0 0 1-2.828-1.208A4.191 4.191 0 0 1 4 9.25a4.19 4.19 0 0 1 1.172-2.917A3.94 3.94 0 0 1 8 5.125zm0 1.5c-.675 0-1.323.277-1.8.769a2.667 2.667 0 0 0-.745 1.856c0 .696.268 1.364.745 1.856a2.507 2.507 0 0 0 1.8.769c.675 0 1.323-.277 1.8-.769.477-.492.745-1.16.745-1.856 0-.696-.268-1.364-.745-1.856A2.507 2.507 0 0 0 8 6.625z" />
      </symbol>
      <symbol id="logo" viewBox="0 0 190 74">
        <path
          fill="#FF1A1A"
          d="M153.836 43.351l3.094-.742c.101-.021.202-.042.303-.083a3.415 3.415 0 0 0 2.043-1.568 3.5 3.5 0 0 0 .404-2.578l-.02-.062a3.599 3.599 0 0 0-.526-1.175 4.166 4.166 0 0 0-1.274-1.114 11.107 11.107 0 0 0-1.799-.846l-3.398-1.258c-1.901-.722-3.822-1.423-5.743-2.124-1.253-.454-2.305-.846-3.235-1.134-.182-.062-.364-.104-.526-.166-1.112-.35-1.901-.495-2.548-.495-.445-.02-.89.062-1.294.248a3.1 3.1 0 0 0-1.112.804c-.162.186-.304.372-.445.557a6.637 6.637 0 0 0-.647 1.32 18.274 18.274 0 0 0-.93 5.92c.02 1.815.06 4.145 1.051 5.734.243.412.546.763.93 1.03.688.496 1.396.558 2.144.62 1.092.082 2.164-.186 3.215-.454l10.313-2.434zm34.62-16.81a17.635 17.635 0 0 0-3.377-4.888 4.259 4.259 0 0 0-.566-.495c-.182-.144-.385-.268-.587-.392a3.71 3.71 0 0 0-.647-.309 3.35 3.35 0 0 0-1.355-.227 2.68 2.68 0 0 0-1.253.372c-.587.309-1.234.783-2.083 1.588a7.445 7.445 0 0 1-.405.37c-.707.681-1.476 1.507-2.406 2.476a293.774 293.774 0 0 0-4.247 4.476l-2.507 2.66a11.45 11.45 0 0 0-1.254 1.568 4.456 4.456 0 0 0-.667 1.567c-.061.433-.061.866.02 1.3l.02.061a3.49 3.49 0 0 0 1.476 2.145c.749.495 1.638.681 2.508.495.141-.02.243-.04.303-.061l13.407-3.156c1.052-.248 2.124-.474 3.074-1.031.647-.372 1.254-.743 1.658-1.506a3.44 3.44 0 0 0 .405-1.34c.202-1.919-.749-4.022-1.517-5.672zm-24.003 5.775c.97-1.237.97-3.093 1.051-4.62.283-5.073.607-10.147.85-15.22.101-1.919.303-3.816.182-5.755-.102-1.588-.102-3.424-1.092-4.744-1.74-2.31-5.46-2.124-8.008-1.753a18.36 18.36 0 0 0-2.326.454 28.84 28.84 0 0 0-2.285.639c-2.427.804-5.864 2.31-6.451 5.177-.323 1.63.445 3.28 1.052 4.744.728 1.794 1.719 3.403 2.629 5.094a1671.72 1671.72 0 0 0 7.28 13.303c.728 1.32 1.516 2.99 2.932 3.671.101.042.182.083.283.104a3.416 3.416 0 0 0 1.982.144l.121-.02a3.405 3.405 0 0 0 1.577-.97c.061-.103.142-.165.223-.248zm-1.173 13.572a3.247 3.247 0 0 0-1.537-1.176 2.922 2.922 0 0 0-1.921-.02 1.904 1.904 0 0 0-.425.185 3.093 3.093 0 0 0-.606.392c-.567.413-1.032.97-1.456 1.526-.102.145-.203.33-.344.454l-2.164 3.032a293.813 293.813 0 0 0-3.62 5.115c-.788 1.114-1.456 2.063-1.981 2.887-.101.166-.203.33-.304.475-.647 1.01-1.011 1.753-1.193 2.392a3.105 3.105 0 0 0-.121 1.362c.061.474.222.928.465 1.34.121.207.263.413.425.599.323.37.687.721 1.092 1.01 1.496 1.052 3.114 1.815 4.833 2.413 1.435.475 2.912.763 4.408.867.263.02.506 0 .768-.021.243-.02.466-.062.708-.103.243-.062.465-.124.688-.207a3.274 3.274 0 0 0 1.152-.742c.324-.33.587-.722.728-1.176.243-.639.405-1.443.526-2.64 0-.165.041-.37.041-.557.08-.99.121-2.165.182-3.526.101-2.104.182-4.208.242-6.312l.142-3.733c.04-.866 0-1.815-.223-2.681a4.536 4.536 0 0 0-.505-1.155zm24.367 5.837c-.445-.495-1.092-1.01-2.103-1.63-.142-.082-.324-.185-.465-.288-.829-.516-1.84-1.052-3.033-1.712-1.82-1.01-3.62-2-5.46-2.97l-3.236-1.753c-.162-.042-.344-.165-.505-.248a8.315 8.315 0 0 0-1.962-.722 8.234 8.234 0 0 0-.708-.082c-.161 0-.303 0-.465.02a3.098 3.098 0 0 0-1.719.887 3.308 3.308 0 0 0-.889 1.733c-.041.412-.041.845.04 1.258.162.887.546 1.753.951 2.516l1.718 3.3c.971 1.856 1.942 3.713 2.933 5.548.647 1.197 1.172 2.228 1.678 3.094.101.165.202.33.283.474.607 1.032 1.092 1.671 1.598 2.145.323.31.707.557 1.132.702.445.144.91.206 1.375.165a4.24 4.24 0 0 0 .708-.124 8.88 8.88 0 0 0 .687-.227c.243-.103.466-.206.688-.33a16.735 16.735 0 0 0 3.599-2.743c1.295-1.3 2.427-2.702 3.317-4.331.121-.227.222-.475.323-.722.081-.227.162-.454.223-.68.061-.248.101-.475.121-.723.041-.474 0-.948-.162-1.402a2.873 2.873 0 0 0-.667-1.155z"
        />
        <path
          fill-rule="evenodd"
          d="M76.326 19.632c0-2.722 2.184-4.95 4.793-4.95 2.588 0 4.692 2.228 4.793 4.97v38.57c0 2.722-2.164 4.95-4.793 4.95a4.735 4.735 0 0 1-1.84-.371 4.81 4.81 0 0 1-1.557-1.073 4.953 4.953 0 0 1-1.031-1.609 4.613 4.613 0 0 1-.344-1.877v-38.61h-.02zm35.652 7.363c-4.267 0-8.17 1.96-10.94 5.136v-.124c-.041-1.3-.567-2.516-1.497-3.403a4.811 4.811 0 0 0-3.417-1.34 4.703 4.703 0 0 0-3.337 1.526 5.017 5.017 0 0 0-1.314 3.485v36.816c0 2.723 2.143 4.909 4.792 4.909 2.65 0 4.793-2.186 4.793-4.909V57.603c2.77 3.135 6.633 5.136 10.94 5.136 8.574 0 15.55-7.92 15.55-17.8-.04-9.9-6.996-17.944-15.57-17.944zm-2.103 27.72c-4.874 0-8.837-4.33-8.837-9.735 0-5.445 3.923-9.776 8.837-9.776 4.873 0 8.837 4.331 8.837 9.776-.041 5.404-3.964 9.735-8.837 9.735zm-79.068-7.239l-1.577 3.527a200.294 200.294 0 0 0-2.103 4.682c-.223.474-.425.97-.647 1.464-2.993 6.786-6.552 14.85-14.297 16.562-3.741.846-9.403-.31-11.506-3.898-2.103-3.63 1.01-7.817 5.015-6.848.627.145 1.253.454 1.88.784 1.052.536 2.103 1.073 3.256.825 1.092-.185 1.76-.99 2.629-2.021a9.261 9.261 0 0 0 1.941-3.795 1.048 1.048 0 0 1-.06-.144l-.061-.124c-.97-1.856-1.82-3.506-2.548-4.909a146.96 146.96 0 0 0-1.213-2.33l-1.578-3.177c-1.193-2.31-1.395-2.702-1.92-3.692a148.537 148.537 0 0 0-3.661-6.62c-1.395-2.372-2.81-5.012-1.658-7.817a4.597 4.597 0 0 1 2.305-2.455 4.504 4.504 0 0 1 3.316-.227c2.407.743 3.479 3.094 4.47 5.28.182.392.364.784.546 1.156 1.617 3.258 3.174 6.517 4.752 9.755.141.33.343.763.606 1.3.223.474.506 1.03.769 1.65.141.309.283.618.424.886.162.351.304.64.405.887.728-1.856 1.476-3.712 2.204-5.548a632.834 632.834 0 0 0 2.204-5.548c.02-.103.202-.495.465-1.093.384-.887.769-1.774 1.133-2.66.97-2.414 2.143-5.322 4.732-6.106.93-.268 1.9-.247 2.81.083.91.33 1.7.928 2.245 1.712.566.804.789 1.732.83 2.64.04 2.042-.931 4.207-1.76 6.084-.202.454-.384.887-.566 1.3l-.102.226c-.222.516-.849 1.96-1.92 4.29-.385.846-.769 1.691-1.133 2.537-.202.433-.404.908-.627 1.382zm39.251-2.97c-.425-9.178-7.846-16.5-16.966-16.5-9.383 0-16.986 7.755-16.986 17.325s7.603 17.325 16.986 17.325c3.316 0 6.39-.97 8.998-2.64.627 1.547 2.104 2.64 3.843 2.64 2.285 0 4.145-1.898 4.145-4.228V44.506h-.02zM53.092 54.2c-4.793 0-8.696-3.98-8.696-8.87 0-4.887 3.903-8.868 8.696-8.868 4.792 0 8.695 3.98 8.695 8.869 0 4.888-3.882 8.869-8.695 8.869z"
          clip-rule="evenodd"
        />
      </symbol>
      <symbol id="backgroundlogo" viewBox="0 0 203 84">
        <path
          fill="#fff"
          d="M166.001 78.664c-.163 0-.326 0-.489-.02h-.041a21.848 21.848 0 0 1-5.7-1.081c-2.362-.795-4.357-1.773-6.128-2.996-.02-.02-.061-.04-.082-.061-.692-.51-1.343-1.1-1.893-1.753-.041-.061-.102-.102-.142-.163a16.857 16.857 0 0 1-.713-.978c-.02-.041-.041-.061-.061-.102a8.016 8.016 0 0 1-1.14-3.24v-.041a7.837 7.837 0 0 1 .305-3.363c.326-1.1.876-2.222 1.771-3.608.041-.06.061-.102.102-.163.021-.04.061-.081.082-.142l.122-.204c.488-.754 1.038-1.509 1.669-2.385l.448-.611a463.95 463.95 0 0 1 2.138-2.996l-4.988 1.161c-1.018.245-2.301.53-3.746.53-.244 0-.489 0-.733-.02-.977-.061-2.769-.204-4.581-1.467-.02 0-.02-.02-.041-.02a8.062 8.062 0 0 1-2.3-2.467c-1.731-2.772-1.751-6.155-1.771-8.173a22.477 22.477 0 0 1 1.201-7.439c.02-.04.041-.081.041-.143.305-.794.671-1.569 1.14-2.282.04-.061.061-.102.101-.163.224-.326.489-.652.754-.958.02-.02.04-.061.081-.082a8.12 8.12 0 0 1 2.789-1.977c.021 0 .021-.02.041-.02a7.957 7.957 0 0 1 3.074-.611h.204c1.16.02 2.382.224 3.909.713.04.02.081.02.122.04.041.021.081.021.122.041.102.02.204.062.285.082.835.265 1.69.57 2.687.917l.733.265c.774.265 1.527.55 2.321.815-1.689-3.016-3.42-6.094-5.089-9.171-.224-.408-.448-.795-.672-1.203-.754-1.324-1.548-2.71-2.199-4.3-.041-.122-.102-.245-.143-.367-.712-1.691-1.791-4.24-1.18-7.194.814-3.975 4.092-6.93 9.752-8.785h.02a38.47 38.47 0 0 1 2.647-.733 23.974 23.974 0 0 1 2.829-.53A26.487 26.487 0 0 1 167.1.97c5.11 0 7.798 2.1 9.141 3.852 1.853 2.405 1.996 5.177 2.097 7.011l.021.388c.101 1.732 0 3.322-.102 4.85-.02.449-.061.897-.082 1.366a852.34 852.34 0 0 1-.57 10.476 132.52 132.52 0 0 0 1.711-1.753l.509-.53c.753-.775 1.404-1.447 2.056-2.038.02-.02.122-.102.122-.102l.142-.143c.062-.06.102-.102.163-.163 1.181-1.1 2.158-1.814 3.176-2.323.998-.53 2.077-.815 3.217-.897h.448c1.038 0 2.036.183 3.013.57.02 0 .041.021.061.021.387.163.753.346 1.12.53.061.04.122.061.183.102.326.204.672.428.998.672.387.286.753.612 1.099.938l.041.04A22.678 22.678 0 0 1 200 30.015c.876 1.814 2.321 4.871 1.975 8.132a7.926 7.926 0 0 1-.977 3.2c0 .02-.021.02-.021.04-1.079 1.937-2.626 2.834-3.461 3.323-1.547.897-3.053 1.243-4.275 1.528l-4.968 1.142c1.08.57 2.159 1.162 3.217 1.732.265.143.53.286.774.428a62 62 0 0 1 2.443 1.366l.163.102c.061.04.142.081.203.122l.123.061c1.343.815 2.32 1.549 3.094 2.385a7.795 7.795 0 0 1 1.812 2.955v.02c.367 1.1.509 2.263.387 3.424v.061c-.041.408-.122.816-.204 1.264-.02.061-.02.102-.04.163a11.26 11.26 0 0 1-.367 1.182c-.183.469-.387.917-.611 1.345 0 0 0 .02-.02.02-1.059 1.876-2.423 3.649-4.174 5.36a22.066 22.066 0 0 1-4.662 3.486c-.448.245-.896.448-1.344.632h-.02a18.58 18.58 0 0 1-1.16.367c-.041 0-.082.02-.122.02a12.15 12.15 0 0 1-1.242.224c-.041 0-.082 0-.102.02a10.1 10.1 0 0 1-.815.041c-.875 0-1.75-.142-2.585-.407-.02 0-.041-.02-.061-.02a8.285 8.285 0 0 1-2.891-1.753c-.855-.795-1.609-1.773-2.443-3.16 0-.02-.021-.04-.021-.04a2.43 2.43 0 0 1-.122-.224l-.142-.225a59.149 59.149 0 0 1-1.324-2.384c-.142-.265-.305-.55-.448-.836a.155.155 0 0 1-.04-.081c0 .04-.041.897-.041.897a54.542 54.542 0 0 1-.163 2.894c0 .081-.02.183-.02.265 0 .06-.021.101-.021.163 0 .06 0 .102-.02.163-.142 1.61-.407 2.833-.835 3.892-.407 1.08-1.038 2.08-1.873 2.874a7.79 7.79 0 0 1-2.972 1.855 8.106 8.106 0 0 1-1.201.346c-.061.02-.122.02-.183.041a7.74 7.74 0 0 1-1.202.163 5.96 5.96 0 0 1-.997.082z"
        />
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M87.494 73.201a9.537 9.537 0 0 1-3.746-.754 9.522 9.522 0 0 1-3.155-2.14 9.59 9.59 0 0 1-2.097-3.2c-.489-1.182-.713-2.446-.713-3.73V25.265c0-5.401 4.357-9.783 9.711-9.783 5.212 0 9.488 4.219 9.712 9.6v38.316c0 5.4-4.357 9.803-9.712 9.803z"
          clip-rule="evenodd"
        />
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M102.763 83.861c-5.354 0-9.71-4.361-9.71-9.742V37.82a9.761 9.761 0 0 1 2.646-6.868 9.708 9.708 0 0 1 6.779-3.037h.265c2.3 0 4.499.816 6.25 2.283 2.871-1.63 6.087-2.527 9.386-2.568h.183c11.299 0 20.522 10.13 20.583 22.582 0 5.93-2.077 11.515-5.823 15.734-3.888 4.362-9.121 6.767-14.699 6.767-2.117 0-4.174-.347-6.128-.999v2.425c-.02 5.36-4.377 9.722-9.732 9.722zm13.682-38.296c-2.24 0-4.011 2.1-4.011 4.77 0 2.608 1.791 4.728 4.011 4.728 2.198 0 3.99-2.12 4.01-4.749 0-2.63-1.791-4.749-4.01-4.749zM15.588 83.86c-4.54 0-10.403-1.711-13.233-6.521 0 0 0-.02-.02-.02C.562 74.323.521 70.756 2.211 67.8c1.67-2.935 4.825-4.75 8.225-4.75a9.48 9.48 0 0 1 2.26.266c1.201.285 2.178.774 2.972 1.161 0 0 .02 0 .02.02a3.91 3.91 0 0 0 .265-.346c-.55-1.06-1.058-2.017-1.486-2.853l-.387-.754c-.346-.652-.651-1.243-.916-1.732l-1.832-3.486c-1.059-1.997-1.242-2.364-1.73-3.28 0-.021-.02-.021-.02-.042-1.12-2.12-2.322-4.26-3.564-6.318-1.466-2.445-4.153-6.97-1.975-12.127a9.507 9.507 0 0 1 4.744-4.972 9.465 9.465 0 0 1 4.031-.897 9.53 9.53 0 0 1 2.83.428c4.5 1.386 6.291 5.238 7.492 7.806.183.367.346.713.489 1.04a458.807 458.807 0 0 1 2.24 4.483c.08-.204.162-.408.244-.611.122-.367.305-.755.529-1.285 0 0 .061-.163.081-.163.367-.815.733-1.65 1.08-2.486 1.14-2.751 3.033-7.398 7.878-8.845.02 0 .02 0 .041-.02a9.648 9.648 0 0 1 5.782.162 9.507 9.507 0 0 1 4.642 3.486c1.059 1.487 1.649 3.26 1.73 5.258v.122c.041 3.098-1.2 5.85-2.198 8.07-.204.429-.367.837-.53 1.203-.02.041-.02.062-.04.102l-.204.428c-.285.653-.896 2.018-1.873 4.097-.346.734-.672 1.467-1.018 2.242l-.244.55c-.163.347-.326.713-.489 1.06 0 0-1.608 3.506-1.608 3.546a164.69 164.69 0 0 0-2.057 4.484c0 .02-.02.04-.04.061-.184.408-.367.836-.57 1.243l-.082.163C33.708 71.47 29.31 81.252 19.11 83.475c-1.079.265-2.28.387-3.522.387z"
          clip-rule="evenodd"
        />
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M72.205 72.672a9.021 9.021 0 0 1-4.988-1.488 21.963 21.963 0 0 1-7.94 1.488c-12.134 0-21.988-9.865-21.988-22.012s9.854-22.01 21.988-22.01c11.584 0 21.132 8.947 21.926 20.462.041.245.061.49.061.734v13.757c0 5.014-4.051 9.07-9.06 9.07zM59.277 46.788a3.869 3.869 0 0 0-3.868 3.872 3.869 3.869 0 1 0 7.736 0c0-2.14-1.73-3.872-3.868-3.872z"
          clip-rule="evenodd"
        />
        <path
          fill="#FF1A1A"
          d="M160.708 48.704l3.115-.734c.102-.02.203-.04.305-.082a3.428 3.428 0 0 0 2.056-1.548 3.407 3.407 0 0 0 .408-2.548l-.021-.061a3.543 3.543 0 0 0-.529-1.162 4.185 4.185 0 0 0-1.283-1.1 11.262 11.262 0 0 0-1.812-.836l-3.42-1.244a485.097 485.097 0 0 0-5.782-2.099c-1.262-.448-2.321-.835-3.257-1.12-.184-.062-.367-.103-.53-.164-1.119-.346-1.913-.489-2.565-.489a2.859 2.859 0 0 0-1.303.245 3.135 3.135 0 0 0-1.12.795 10.92 10.92 0 0 0-.448.55 6.546 6.546 0 0 0-.651 1.304 17.79 17.79 0 0 0-.937 5.85c.021 1.793.062 4.096 1.059 5.665.244.408.55.755.937 1.02.692.489 1.404.55 2.158.611 1.099.081 2.178-.183 3.237-.448l10.383-2.405zm34.854-16.61a17.435 17.435 0 0 0-3.399-4.831 4.298 4.298 0 0 0-.571-.49 5.815 5.815 0 0 0-.59-.387 3.819 3.819 0 0 0-.651-.305 3.434 3.434 0 0 0-1.364-.224 2.75 2.75 0 0 0-1.263.366c-.59.306-1.242.775-2.097 1.57a7.118 7.118 0 0 1-.407.367c-.712.672-1.486 1.487-2.423 2.445a294.206 294.206 0 0 0-4.275 4.423l-2.525 2.63c-.468.488-.895.998-1.262 1.548a4.387 4.387 0 0 0-.672 1.55c-.061.427-.061.855.021 1.283l.02.061a3.45 3.45 0 0 0 1.486 2.12c.754.489 1.649.672 2.525.489.142-.02.244-.04.305-.061l13.498-3.119c1.059-.244 2.138-.468 3.095-1.019.651-.366 1.262-.733 1.669-1.487a3.34 3.34 0 0 0 .407-1.325c.204-1.895-.753-3.974-1.527-5.605zM171.396 37.8c.978-1.223.978-3.057 1.059-4.566.285-5.013.611-10.027.855-15.04.102-1.896.305-3.771.183-5.687-.101-1.57-.101-3.383-1.099-4.688-1.751-2.282-5.497-2.099-8.062-1.732-.774.102-1.568.245-2.341.448a29.94 29.94 0 0 0-2.301.632c-2.443.795-5.904 2.283-6.495 5.116-.325 1.61.448 3.24 1.059 4.687.733 1.774 1.731 3.363 2.647 5.035 2.422 4.402 4.866 8.763 7.329 13.145.733 1.305 1.527 2.956 2.952 3.628.102.04.183.082.285.102a3.5 3.5 0 0 0 1.995.143l.122-.02a3.441 3.441 0 0 0 1.588-.959c.082-.101.143-.163.224-.244zm-1.18 13.41a3.267 3.267 0 0 0-1.548-1.161 3.136 3.136 0 0 0-1.934-.02 1.87 1.87 0 0 0-.427.183 3.102 3.102 0 0 0-.611.387c-.57.408-1.038.958-1.466 1.508-.102.143-.204.326-.346.449l-2.179 2.996a291.267 291.267 0 0 0-3.644 5.054c-.794 1.1-1.466 2.038-1.995 2.853a9.875 9.875 0 0 1-.305.47c-.652.998-1.018 1.732-1.202 2.364a3.019 3.019 0 0 0-.122 1.345c.061.468.224.917.469 1.324a3.9 3.9 0 0 0 .427.591 6.42 6.42 0 0 0 1.099 1c1.507 1.038 3.136 1.793 4.866 2.384 1.446.469 2.932.754 4.439.856.264.02.509 0 .773-.02.244-.021.468-.062.713-.103.244-.06.468-.122.692-.203a3.293 3.293 0 0 0 1.16-.734 2.89 2.89 0 0 0 .733-1.162c.245-.632.408-1.427.53-2.609 0-.163.04-.367.04-.55.082-.978.123-2.14.184-3.485.101-2.079.183-4.158.244-6.237l.142-3.689c.041-.856 0-1.793-.223-2.65a3.87 3.87 0 0 0-.509-1.14zm24.532 5.768c-.448-.489-1.099-.998-2.117-1.61-.143-.081-.326-.183-.468-.285-.835-.51-1.853-1.04-3.054-1.692a288.026 288.026 0 0 0-5.497-2.935l-3.258-1.732c-.163-.04-.346-.163-.509-.244a8.471 8.471 0 0 0-1.974-.714 8.564 8.564 0 0 0-.713-.081c-.163 0-.305 0-.468.02a3.134 3.134 0 0 0-1.731.876 3.258 3.258 0 0 0-.896 1.712c-.04.408-.04.836.041 1.244.163.876.55 1.732.957 2.486l1.73 3.261c.978 1.834 1.955 3.669 2.953 5.483.651 1.182 1.18 2.2 1.689 3.057.102.163.204.326.285.469.611 1.018 1.1 1.65 1.609 2.12.325.305.712.55 1.14.692.448.143.916.204 1.384.163.245-.02.468-.061.713-.122.224-.061.468-.143.692-.224.244-.102.468-.204.692-.326a16.814 16.814 0 0 0 3.624-2.711c1.303-1.284 2.443-2.67 3.339-4.28.122-.224.224-.469.326-.713.081-.225.163-.449.224-.673a4.45 4.45 0 0 0 .122-.713c.041-.47 0-.938-.163-1.386a2.832 2.832 0 0 0-.672-1.142z"
        />
        <path
          fill-rule="evenodd"
          d="M82.672 25.265c0-2.69 2.199-4.892 4.825-4.892 2.606 0 4.723 2.202 4.825 4.912v38.113c0 2.69-2.178 4.891-4.825 4.891a4.844 4.844 0 0 1-1.853-.367 4.845 4.845 0 0 1-1.567-1.06 4.885 4.885 0 0 1-1.039-1.59 4.485 4.485 0 0 1-.346-1.854V25.265h-.02zm35.891 7.276c-4.296 0-8.225 1.937-11.015 5.075v-.122a4.782 4.782 0 0 0-1.506-3.363 4.895 4.895 0 0 0-3.441-1.325 4.774 4.774 0 0 0-3.36 1.508 4.905 4.905 0 0 0-1.322 3.445v36.38a4.83 4.83 0 0 0 4.825 4.85 4.829 4.829 0 0 0 4.825-4.85V62.787c2.789 3.098 6.678 5.075 11.014 5.075 8.632 0 15.656-7.827 15.656-17.59-.02-9.782-7.044-17.73-15.676-17.73zm-2.118 27.392c-4.906 0-8.897-4.28-8.897-9.62 0-5.38 3.95-9.66 8.897-9.66 4.907 0 8.897 4.28 8.897 9.66-.02 5.34-3.99 9.62-8.897 9.62zM36.864 52.78l-1.588 3.485a196.63 196.63 0 0 0-2.118 4.626c-.224.469-.427.958-.651 1.447-3.013 6.705-6.596 14.675-14.394 16.366-3.766.836-9.467-.306-11.584-3.852-2.117-3.587 1.018-7.724 5.049-6.766.631.142 1.262.448 1.893.774 1.059.53 2.118 1.06 3.278.815 1.1-.183 1.771-.978 2.647-1.997a9.09 9.09 0 0 0 1.954-3.75.999.999 0 0 1-.06-.143l-.062-.122c-.977-1.834-1.832-3.465-2.565-4.85a133.55 133.55 0 0 0-1.222-2.304l-1.608-3.139c-1.201-2.282-1.405-2.67-1.934-3.648a145.957 145.957 0 0 0-3.685-6.542c-1.405-2.344-2.83-4.953-1.67-7.724a4.58 4.58 0 0 1 2.321-2.426 4.613 4.613 0 0 1 3.34-.224c2.422.734 3.5 3.057 4.498 5.218.184.387.367.774.55 1.14 1.629 3.221 3.197 6.441 4.785 9.641.142.326.346.754.61 1.284.224.469.51 1.02.774 1.63.142.306.285.612.427.877.163.347.306.632.408.876.733-1.834 1.486-3.668 2.219-5.482a619.705 619.705 0 0 0 2.219-5.483c.02-.101.204-.489.468-1.08.387-.876.774-1.752 1.14-2.629.978-2.385 2.158-5.258 4.764-6.033a4.628 4.628 0 0 1 2.83.082 4.7 4.7 0 0 1 2.26 1.691c.57.795.794 1.712.835 2.61.04 2.017-.937 4.157-1.771 6.012-.204.448-.387.876-.57 1.284l-.102.224c-.224.51-.855 1.936-1.934 4.24-.387.835-.774 1.67-1.14 2.506-.204.428-.408.897-.611 1.365zm39.496-2.935c-.427-9.07-7.899-16.305-17.08-16.305-9.447 0-17.102 7.663-17.102 17.12s7.655 17.12 17.101 17.12a16.94 16.94 0 0 0 9.06-2.609c.631 1.529 2.117 2.609 3.868 2.609 2.3 0 4.174-1.875 4.174-4.178V49.845h-.02zm-17.08 9.579c-4.826 0-8.755-3.934-8.755-8.764 0-4.83 3.93-8.764 8.754-8.764 4.825 0 8.755 3.934 8.755 8.764 0 4.83-3.91 8.764-8.755 8.764z"
          clip-rule="evenodd"
        />
      </symbol>
      <symbol id="share" viewBox="0 0 16 16">
        <path d="M8.8 2.731V12a.8.8 0 0 1-1.6 0V2.731L6.166 3.765a.8.8 0 0 1-1.132-1.13l2.4-2.4a.8.8 0 0 1 1.132 0l2.4 2.4a.8.8 0 1 1-1.132 1.13L8.8 2.731zM12 7.2a.8.8 0 1 1 0-1.6h2.4A1.6 1.6 0 0 1 16 7.2v7.2a1.6 1.6 0 0 1-1.6 1.6H1.6A1.6 1.6 0 0 1 0 14.4V7.2a1.6 1.6 0 0 1 1.6-1.6H4a.8.8 0 0 1 0 1.6H1.6v7.2h12.8V7.2H12z" />
      </symbol>
      <symbol id="talk" viewBox="0 0 16 16">
        <path d="M4.444 15a.943.943 0 0 1-.34-.063.895.895 0 0 1-.288-.18.83.83 0 0 1-.193-.27.785.785 0 0 1-.067-.32V11.45c-1-.195-1.9-.705-2.547-1.446A4.02 4.02 0 0 1 0 7.381v-2.22C.001 4.056.47 3 1.303 2.22A4.608 4.608 0 0 1 4.444 1h7.112a4.608 4.608 0 0 1 3.14 1.22C15.53 3 16 4.057 16 5.16v2.22a4.039 4.039 0 0 1-1.303 2.94 4.609 4.609 0 0 1-3.141 1.22h-2.46L5.021 14.8a.925.925 0 0 1-.578.199V15zm0-12.335a2.764 2.764 0 0 0-1.884.732 2.421 2.421 0 0 0-.782 1.765V7.38c.002.655.279 1.283.77 1.75.49.466 1.156.734 1.855.747.24.001.469.088.641.243a.856.856 0 0 1 .29.589v1.653l2.856-2.286a.92.92 0 0 1 .577-.2h2.789c.707 0 1.384-.264 1.884-.731.5-.468.781-1.103.782-1.765V5.162c0-.662-.281-1.297-.781-1.765a2.766 2.766 0 0 0-1.885-.733H4.444v.001z" />
      </symbol>
      <symbol id="calendar" viewBox="0 0 16 16">
        <path d="M11.078 0a1.141 1.141 0 0 1 1.142 1.143v.228h2.627A1.141 1.141 0 0 1 16 2.514v10.972A2.515 2.515 0 0 1 13.488 16H2.5A2.512 2.512 0 0 1 0 13.509V2.514a1.143 1.143 0 0 1 1.142-1.143h2.615v-.228a1.143 1.143 0 1 1 2.284 0v.228h3.895v-.228A1.143 1.143 0 0 1 11.078 0zm2.627 8H2.272v5.486a.23.23 0 0 0 .228.228h10.986a.229.229 0 0 0 .217-.205V8zM11.99 9.143a.57.57 0 0 1 .572.571V12a.572.572 0 0 1-.572.571H9.707a.571.571 0 0 1-.57-.571V9.714a.572.572 0 0 1 .57-.571h2.284zM3.746 3.657H2.284v2.057h11.42V3.657h-1.473v.229a1.144 1.144 0 0 1-1.95.808 1.143 1.143 0 0 1-.334-.808v-.229H6.03v.229a1.143 1.143 0 1 1-2.284 0v-.229z" />
      </symbol>
      <symbol id="star" viewBox="0 0 16 16">
        <path d="M12.498 15.985a.723.723 0 0 1-.351-.09l-4.132-2.093-4.131 2.123a.779.779 0 0 1-.764-.06.733.733 0 0 1-.305-.748l.764-4.485L.226 7.447a.744.744 0 0 1-.188-.765.747.747 0 0 1 .235-.338.772.772 0 0 1 .38-.168l4.613-.657 2.062-4.097a.753.753 0 0 1 .282-.308.776.776 0 0 1 1.093.308l2.061 4.097 4.582.657c.14.02.273.078.381.168a.733.733 0 0 1 .046 1.104L12.43 10.64l.764 4.485a.733.733 0 0 1-.172.613.762.762 0 0 1-.592.262l.069-.015zm-4.483-3.738c.125.002.247.03.36.082l3.107 1.607-.595-3.394a.733.733 0 0 1 .221-.665l2.52-2.4-3.482-.538a.774.774 0 0 1-.603-.404L8.015 3.44 6.488 6.535a.752.752 0 0 1-.573.404l-3.482.5 2.528 2.4a.746.746 0 0 1 .221.666L4.587 13.9l3.108-1.607a.872.872 0 0 1 .32-.045z" />
      </symbol>
    </svg>,

    document.body
  );
}
