import React from 'react'
import './Display.scss'


export default function Display(props) {
  console.log(props)
  let src;
  let title;
  if (props.type === "videos") {
    src = props.item.videoURL
    title = props.item.title

  }
  return (

    <section className='display'>
      <h1 id="adjusting-your-harness">Adjusting Your Harness</h1>
      <p><strong>Author: Christopher B</strong></p>
      <p>Rock climbing is an exhilarating sport that demands precision, strength, and above all, safety. Among the essential gear for climbers, a properly fitted harness is paramount. It serves as the link between you and your lifeline, ensuring security as you scale dizzying heights. However, merely owning a harness isn't enough; it must be correctly adjusted to guarantee optimal safety and comfort. In this guide, we'll delve into the intricacies of adjusting a climbing harness to suit your body and climbing style.</p>
      <h2 id="understanding-harness-anatomy">Understanding Harness Anatomy</h2>
      <p>Before diving into adjustments, it's crucial to understand the components of a climbing harness. A standard harness comprises waist and leg loops connected by belay and tie-in loops. The waist loop bears the majority of your weight during climbs, while the leg loops provide stability and support.</p>
      <h2 id="finding-the-right-fit">Finding the Right Fit</h2>
      <p>Begin by loosening all the straps on your harness, ensuring it's fully extended and open. Step into the harness, pulling it up to your waist. The waist loop should sit snugly above your hips, neither too tight nor too loose. Ensure it's centered on your body, with the belay loop at the front.</p>
      <h2 id="fine-tuning-for-comfort">Fine-Tuning for Comfort</h2>
      <p>Once you've achieved a basic fit, it's time for fine-tuning. Start by adjusting the waist loop. Tighten it slightly to ensure it stays in place during climbs but avoid over-tightening, which could restrict blood flow or cause discomfort. Similarly, adjust the leg loops to your preference, ensuring they're snug without cutting into your thighs. Keep in mind that your harness should allow for freedom of movement without excessive slack.</p>
      <h2 id="checking-for-security">Checking for Security</h2>
      <p>After making adjustments, perform a series of checks to ensure your harness is securely fitted. Double-check all straps to ensure they're threaded correctly through buckles and securely fastened. Pay particular attention to the tie-in points, ensuring they're free from twists or tangles.</p>
      <h2 id="considering-climbing-style">Considering Climbing Style</h2>
      <p>Adjustments may vary based on your climbing style and preferences. For sport climbers, a snug fit with minimal padding may be preferable for agility and freedom of movement. On the other hand, trad climbers may opt for additional padding and support for comfort during long belays.</p>
      <h2 id="regular-maintenance">Regular Maintenance</h2>
      <p>Lastly, remember that harness adjustments aren't a one-time task. As you climb and your body changes, periodically reassess the fit of your harness to ensure continued safety and comfort. Additionally, inspect your harness regularly for signs of wear or damage, replacing it if necessary to maintain peak performance.</p>
      <p>In conclusion, adjusting a climbing harness is a crucial step in ensuring safety and comfort during climbs. By understanding the anatomy of your harness, achieving the right fit, and fine-tuning for comfort, you can climb with confidence, knowing that your gear is working with you every step of the way. So, next time you gear up for a climb, take the time to adjust your harness properly—it could make all the difference between a successful ascent and a potentially risky situation.</p>
    </section>
  );
}
