<script lang="ts">
    export let id: string;
    export let title: string;
    export let image: string;
    export let tags: string[] = [];
    export let description: string;
    export let link: string;
    export let techLabel: string = ""; // optional large watermark-like label
  </script>
  
  <a
    id={id}
    href={link}
    class="card mx-auto max-w-4xl bg-base-100 shadow-xl transition-shadow mb-7 h-card u-url hover:shadow-2xl relative"
  >  
    {#if techLabel}
      <div class="absolute text-5xl font-bold opacity-5 rotate-6 leading-tight top-2 right-0">
        {techLabel}
      </div>
    {/if}
  
    <div class="card-body p-4">
      <div class="flex flex-col md:flex-row items-start gap-4">
        
        <!-- Image -->
        <div class="mb-auto aspect-video w-full max-w-full shrink-0 md:max-w-xs">
          <img class="rounded-md" src={image} alt={description} />
        </div>
  
        <!-- Text content -->
        <div class="card-title flex-1 flex flex-col items-start justify-start">
          <!-- Title + Tags grouped -->
          <div>
            <h2 class="p-name text-left text-2xl mb-1">{title}</h2>
            <div class="text-base font-normal">
              {#each tags as tag}
                <span class="btn btn-sm btn-ghost normal-case border-dotted border-base-content/20 border-2 my-1 mr-1">
                  {tag}
                </span>
              {/each}
            </div>
          </div>
        
          <!-- Description -->
          <p class="text-left text-base font-normal opacity-70 self-start">
            {description}
          </p>
        </div>
  
      </div>
    </div>
  </a>
  