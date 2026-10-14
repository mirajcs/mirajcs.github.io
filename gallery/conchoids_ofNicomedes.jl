using WGLMakie
using Makie


function simple_parametric()
    fig = Figure(size = (700, 500))
    
    slider = Slider(fig[2, 1], range = -5:0.1:5, startvalue = 1.0)
    ax = Axis(fig[1, 1], title = "Conchoids of Nicomedes")
    
    t = 0:0.01:2*π
    t_filtered = t[abs.(mod.(t, π) .- π/2) .> 0.05]
    
    a = slider.value
    curve = lift(a) do a_val
        x = a_val .+ cos.(t_filtered)
        y = a_val .* tan.(t_filtered) .+ sin.(t_filtered)
        return Point2f.(x, y)
    end
    
    lines!(ax, curve, color = :blue, linewidth = 2)
    ylims!(ax, -10, 10)
    xlims!(ax, -10, 10)
    
    return fig
end

# Generate and save
fig = simple_parametric()
save("parametric_interactive.html", fig)
println("Saved as parametric_interactive.html")