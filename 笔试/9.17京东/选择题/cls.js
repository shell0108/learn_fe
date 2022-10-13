class cls {
    static func() {console.log(true);}
}

cls.func = function() {console.log(false);}

cls.func()