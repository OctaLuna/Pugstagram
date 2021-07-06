<!--Este archivo es parte de TimeLine-->
<script>
    import Comments from "./Comments.svelte";
</script>


<!--Esto es par alos post que hacemos, para su estructura-->
<div class="Card">
    <div class="Card-container">
        <div class="Card-header">
            <div class="Card-user">
                <img src="../../../Fotos/Theita.jpeg" alt="">
                <h2>
                    Theita 
                    <span>La Paz-Bolivia</span>
                </h2>
            </div>
            <div class="Card-settings">
                <i class="fas fa-ellipsis-h" />
            </div>
        </div>
        <div class="Card-photo">
            <figure>
                <img src="../../../Fotos/Theita.jpeg" alt="">
            </figure>
        </div>
        <div class="Card-icons">
            <div class="Card-icons-firts">
                <i class="fas fa-heart" />
                <i class="fas fa-paper-plane"></i>
            </div>
            <div class="Card-icons-second">
                <i class="fas fa-bookmark"></i>
            </div>
        </div>
        <div class="Card-description">
            <h3>Octavio Luna</h3>
            <span>Es la perrita mas linda de todas</span>
        </div>
        <Comments/>
    </div>
</div>