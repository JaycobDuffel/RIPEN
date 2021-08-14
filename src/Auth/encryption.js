import base64 from "react-native-base64";

const encode = (password) => {
  return base64.encode(password);
};

const decode = (hash) => {
  return base64.decode(hash);
};

export default {
    encode,
    decode,
}