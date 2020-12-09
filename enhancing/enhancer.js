module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enhancement < 20) {
    const enhanced = item.enhancement + 1;
    return { ...item,
      enhancement: enhanced
    }
  } else {
    return {...item}
  }
}

function fail(item) {
  if(item.enhancement < 15) {
    const weakened = item.durability - 5;
    return {...item,
    durability: weakened}
  } else {
    if(item.enhancement > 16) {
      const weaker = item.durability - 10;
      const lowered = item.enhancement - 1;
      return {...item,
      durability: weaker,
    enhancement: lowered}
    } else {
      const weaker = item.durability - 10;
      return { ...item,
      durability: weaker}
    }
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
