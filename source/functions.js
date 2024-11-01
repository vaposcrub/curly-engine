function nextDay(watch) {
    if watch > 6 {
        Q.days += 1;
    }

    if watch > 6 {
        Q.watch = 0
    }
}

function nextWeek(days) {
    if days > 6 {
        Q.weeks += 1;
    }
    if days > 6 {
        Q.days = 0;
    }
}

function watchName(watch) {
    if watch = 1 or 2  {
        return "the morning"
    }
    if watch = 3 or 4 {
        return "the afternoon"
    }
    if watch = 5 or 6 {
        return "night"
    }
}