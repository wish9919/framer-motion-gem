import { motion, AnimationProps } from "framer-motion";

const pathColor = "#064420";
const shapeColor = "#064420";

const mainPathVariant: AnimationProps = {
  transition: {
    duration: 4,
    ease: "easeInOut",
  },
  variants: {
    visible: {
      pathLength: 1,
    },
    hidden: {
      pathLength: 0,
    },
  },
};

const shapeVariations: AnimationProps = {
  transition: {
    delay: 4,
    duration: 1,
    ease: "easeIn",
  },
  variants: {
    visible: {
      fillOpacity: 1,
      pathLength: 1,
      transition: {
        delay: 2,
        duration: 3,
      },
    },
    hidden: {
      fillOpacity: 0,
      pathLength: 0,
    },
  },
};

const AnimateElement = () => {
  return (
    <>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="500px"
          height="500px"
          viewBox="0 0 172.679 110.173"
        >
          <g
            id="Group_1"
            data-name="Group 1"
            transform="translate(-67.528 -158.5)"
          >
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_1"
              data-name="Path 1"
              d="M154.159,159.064c14.534,0,29.069.063,43.6-.046a12.556,12.556,0,0,1,8.923,2.922c9.926,8.437,19.947,16.771,30.149,24.871,3.719,2.953,3.852,4.888.247,8.109q-39.8,35.564-79.3,71.45c-2.775,2.517-4.694,2.734-7.563.133q-39.827-36.089-79.879-71.929c-3.5-3.129-2.766-5.007.459-7.6q15.512-12.493,30.711-25.372c2.788-2.375,5.741-2.609,9.048-2.6,14.534.054,29.069.024,43.6.024Z"
              fill="none"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <motion.path
              id="Path_2"
              data-name="Path 2"
              d="M250.464,296.331l1.538.03c1.307-7.343,2.637-14.681,3.918-22.029,3.626-20.79,3.625-20.7-17.717-19.331-3.827.246-4.83,1.047-3.2,4.792C240.283,271.918,245.329,284.144,250.464,296.331Z"
              transform="translate(-107.792 -61.921)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_3"
              data-name="Path 3"
              d="M328.082,297.135l1.533.463q7.954-18.844,15.917-37.683c1.387-3.272-.362-3.911-3.088-3.9-5.241.024-10.5.265-15.718-.064-4.739-.3-5.421,1.8-4.7,5.818C324.151,273.539,326.079,285.344,328.082,297.135Z"
              transform="translate(-164.554 -62.851)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_4"
              data-name="Path 4"
              d="M295.241,187.586c-19.932-12.509-26.452-12.419-42.344.293,6.032,3.717,11.991,7.275,17.818,11.037a4.977,4.977,0,0,0,6.123.034C282.678,195.208,288.635,191.647,295.241,187.586Z"
              transform="translate(-119.883 -12.499)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_5"
              data-name="Path 5"
              d="M159.132,256.3l33.9,36.393c-3.134-11.876-7.785-22.776-12.35-33.711a3.876,3.876,0,0,0-3.972-2.687C171.591,256.312,166.471,256.3,159.132,256.3Z"
              transform="translate(-59.079 -63.095)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_6"
              data-name="Path 6"
              d="M365.005,291.675l1.178,1.263,34.241-36.792c-7.112,0-12.245.058-17.375-.023-2.8-.044-3.818,1.718-4.739,3.933C373.92,270.615,369.448,281.139,365.005,291.675Z"
              transform="translate(-192.581 -62.981)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_7"
              data-name="Path 7"
              d="M301.311,300.225c-1.169,16.895-12.73,33.828.118,50.912C313.995,333.957,302.882,317.109,301.311,300.225Z"
              transform="translate(-147.456 -91.58)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_8"
              data-name="Path 8"
              d="M429.53,188.615c1.772-5.637-1.985-9.567-6.923-12.465-4.519-2.651-6.885,2.424-10.325,3.73-1.823.693-3.365,2.1-5.1,3.071-2.787,1.57-2.2,2.723.291,3.933,4.915,2.387,9.782,4.872,14.674,7.306C429.472,197.831,429.474,197.828,429.53,188.615Z"
              transform="translate(-218.736 -10.631)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_9"
              data-name="Path 9"
              d="M175,185.057c-5.432-3.415-9.8-6.19-14.2-8.912a3.892,3.892,0,0,0-4.175-.3c-5.417,2.64-9.6,14.3-6.912,19.541,1.087,2.117,2.406,1.1,3.664.477C160.23,192.472,167.061,189.032,175,185.057Z"
              transform="translate(-52.427 -10.617)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_10"
              data-name="Path 10"
              d="M433.729,285.447l1.181.909,34.3-31.028c-7.916.566-14.978-3.047-18.861,2.164C443.906,266.137,439.179,276.061,433.729,285.447Z"
              transform="translate(-237.146 -62.013)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_11"
              data-name="Path 11"
              d="M126.667,286.334c.188-1.325.46-1.889.284-2.2q-5.344-9.422-10.785-18.791c-6.643-11.45-8.661-12.269-22.477-8.753Z"
              transform="translate(-16.642 -62.093)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_12"
              data-name="Path 12"
              d="M368.546,307.053c-11.438,14.759-28.608,25.133-36.729,45.306C350.078,340.47,360.971,325.206,368.546,307.053Z"
              transform="translate(-171.06 -96.008)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_13"
              data-name="Path 13"
              d="M226.706,354.339c-8.448-20.127-25.1-30.84-37-45.451C196.915,327.279,208.7,342,226.706,354.339Z"
              transform="translate(-78.904 -97.197)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_14"
              data-name="Path 14"
              d="M487.567,204.97c-1.767,14.546.738,16.489,14.638,12.192-1.469-1.291-2.726-2.452-4.043-3.54C494.9,210.93,491.616,208.272,487.567,204.97Z"
              transform="translate(-271.736 -29.81)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_15"
              data-name="Path 15"
              d="M346.169,172.33c14.857,9.489,14.369,10.37,25.954,0Z"
              transform="translate(-180.367 -8.644)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_16"
              data-name="Path 16"
              d="M203.224,172.224c10.959,9.677,17.013,9.488,25.128,0Z"
              transform="translate(-87.672 -8.575)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_17"
              data-name="Path 17"
              d="M91.991,219.338c17.48,1.356,18.329.591,14.9-12.306Z"
              transform="translate(-15.541 -31.147)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_18"
              data-name="Path 18"
              d="M342.63,223.641l.488,1.669c3.656,0,7.321.161,10.963-.063,2.032-.125,5.335,1.348,5.778-1.469a10.661,10.661,0,0,0-2.274-7.584c-1.912-2.287-3.858.739-5.6,1.667C348.753,219.577,345.735,221.692,342.63,223.641Z"
              transform="translate(-178.072 -36.546)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_19"
              data-name="Path 19"
              d="M250.146,225.248l.533-1.451c-3.295-2.064-6.495-4.306-9.924-6.114-1.672-.882-3.473-4.02-5.54-1.336a11.005,11.005,0,0,0-2.192,6.908c.244,3.312,3.472,1.795,5.39,1.918C242.309,225.425,246.233,225.248,250.146,225.248Z"
              transform="translate(-106.983 -36.498)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_20"
              data-name="Path 20"
              d="M193.357,217.9c-5.392,2.978-10.85,4.223-15.767,9.193C184.877,226.21,193.191,230.279,193.357,217.9Z"
              transform="translate(-71.049 -38.198)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
            <motion.path
              id="Path_21"
              data-name="Path 21"
              d="M417.676,225.226,402.5,217.538C403.966,227.029,403.966,227.029,417.676,225.226Z"
              transform="translate(-216.895 -37.96)"
              stroke={pathColor}
              stroke-miterlimit="10"
              stroke-width="1"
              fill={shapeColor}
              {...shapeVariations}
              animate="visible"
              initial="hidden"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default AnimateElement;
