const Mutations = {
    async createItem(parent, args, ctx, info){
        //TODO check login
        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            }
        },info);
        console.log(item);
        return item;
    }
    //createDog(parent, args, ctx, info){
        //create a dog!
    //    console.log(args)
    //}

};

module.exports = Mutations;
