import moment from "moment";

const formatApiDateTime = (value) => {
  return moment(value.substring(0, 10), moment.ISO_8601).format(
    `YYYY-MM-DD[T]HH:mmZ[Z]`
  );
};

export { formatApiDateTime };
