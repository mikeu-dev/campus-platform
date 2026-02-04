<script lang="ts">
	import { enhance } from '$app/forms';
	import { Plus, User, Shield } from 'lucide-svelte';
	export let data;
	export let form;

	let showForm = false;
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<h2 class="text-2xl font-bold text-gray-900">User Management</h2>
		<button
			on:click={() => (showForm = !showForm)}
			class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
		>
			<Plus class="mr-2 h-5 w-5" />
			Add User
		</button>
	</div>

	{#if showForm}
		<div class="rounded-lg border border-gray-200 bg-gray-50 p-6">
			<h3 class="mb-4 text-lg font-medium text-gray-900">Create New User</h3>
			<form method="POST" action="?/create" use:enhance on:submit={() => (showForm = false)}>
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
					<div>
						<label for="fullName" class="block text-sm font-medium text-gray-700">Full Name</label>
						<input
							type="text"
							name="fullName"
							id="fullName"
							required
							class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
					</div>
					<div>
						<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							required
							class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
					</div>
					<div>
						<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							required
							class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
					</div>
					<div>
						<label for="roleName" class="block text-sm font-medium text-gray-700">Role</label>
						<select
							id="roleName"
							name="roleName"
							class="mt-1 block w-full rounded-md border border-gray-300 py-2 pr-10 pl-3 text-base focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm"
						>
							<option value="student">Student</option>
							<option value="lecturer">Lecturer</option>
							<option value="admin">Admin</option>
						</select>
					</div>
				</div>
				<div class="mt-6 flex justify-end">
					<button
						type="button"
						on:click={() => (showForm = false)}
						class="mr-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
						>Cancel</button
					>
					<button
						type="submit"
						class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
						>Create User</button
					>
				</div>
			</form>
			{#if form?.error}
				<div class="relative mt-4 rounded border border-red-200 bg-red-50 px-4 py-3 text-red-700">
					<span class="block sm:inline">{form.error}</span>
				</div>
			{/if}
			{#if form?.success}
				<div
					class="relative mt-4 rounded border border-green-200 bg-green-50 px-4 py-3 text-green-700"
				>
					<span class="block sm:inline">User created successfully!</span>
				</div>
			{/if}
		</div>
	{/if}

	<div class="flex flex-col">
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
				<div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
					<table class="min-w-full divide-y divide-gray-200">
						<thead class="bg-gray-50">
							<tr>
								<th
									scope="col"
									class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
									>Name</th
								>
								<th
									scope="col"
									class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
									>Email</th
								>
								<th
									scope="col"
									class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
									>Role</th
								>
								<th scope="col" class="relative px-6 py-3">
									<span class="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200 bg-white">
							{#each data.users as user}
								<tr>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="h-10 w-10 flex-shrink-0">
												<div
													class="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100"
												>
													<span class="text-sm font-medium text-indigo-600"
														>{user.full_name.charAt(0)}</span
													>
												</div>
											</div>
											<div class="ml-4">
												<div class="text-sm font-medium text-gray-900">{user.full_name}</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-500">{user.email}</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span
											class="inline-flex rounded-full bg-green-100 px-2 text-xs leading-5 font-semibold text-green-800 capitalize"
										>
											{user.role}
										</span>
									</td>
									<td class="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
										<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
									</td>
								</tr>
							{:else}
								<tr>
									<td colspan="4" class="px-6 py-4 text-center text-gray-500">No users found.</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
